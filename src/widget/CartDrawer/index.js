"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { HiOutlineArrowLeft } from "react-icons/hi";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });

import cartLottie from "../../../public/assets/LottieAnimations/emptyCart.json";
import { useCart } from "@/app/utilities/cartContex";
import Button from "@/components/Button";
import Cart from "@/components/Cart";
import useModal from "@/app/hooks/useModal";
import useOrder from "@/app/hooks/useOrder";
import useMyProfile from "@/app/hooks/useMyProfile";
import AlartModal from "@/components/ErrorModal";
import "react-modern-drawer/dist/index.css";

const CartDrawer = ({ open, onClose, direction, size }) => {
    const { data: profileData } = useMyProfile();
    const [message, setMessage] = useState("");

    const { cartItems, setCartItems, removeFromCart, incrementQuantity, decrementQuantity, productQuantity } = useCart();
    const { isOpen, openModal, closeModal } = useModal();
    const { isOpen: success, openModal: openSuccess, closeModal: closeSuccess } = useModal();
    const { order } = useOrder();
    const { handleSubmit } = useForm();

    const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = cartItems.reduce((sum, item) => sum + item.discount_price, 0);
    const total = subTotal - discount;

    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [open]);

    if (!open) return null;

    const onSubmit = async () => {
        const orderData = new FormData();

        // Append form data from state
        orderData.append("user_name", profileData?.data.name);
        orderData.append("user_phone", profileData?.data.phone);
        orderData.append("area_id", profileData?.data.area_id);
        orderData.append("subtotal", subTotal);
        orderData.append("discount", discount);
        orderData.append("total", total);
        orderData.append("delivery_date", "2025-10-02");
        orderData.append("order_details", JSON.stringify(cartItems));

        const { loading, success: successOrder, error, responseData } = await order(orderData);

        if (successOrder) {
            setMessage(responseData.message);
            openSuccess();
            closeModal();

            const timer = setTimeout(() => {
                setCartItems([]);
                closeSuccess();
            }, 1000);

            return () => clearTimeout(timer);
        }
    };

    return (
        <>
            <Drawer open={open} onClose={onClose} direction={direction} className="md:!w-[450px] !w-full">
                {cartItems.length > 0 ? (
                    <>
                        <div className=" h-screen relative bg-secondary_bg flex flex-col justify-between">
                            <div>
                                <div className=" relative flex items-center justify-center flex-col px-4 py-2 bg-warning_extra_light">
                                    <h6 className=" text-H6 font-semibold text-center">my cart</h6>
                                    <p>Tue, Jan 4, 2025</p>
                                    <div className=" absolute left-4 top-[40%]">
                                        <span onClick={onClose} className=" cursor-pointer">
                                            <HiOutlineArrowLeft size={18} />
                                        </span>
                                    </div>
                                </div>
                                <div className=" md:px-6 px-2 py-2 h-[calc(100vh-205px)] overflow-auto no-scrollbar flex flex-col gap-2">
                                    {cartItems.map((data) => (
                                        <Cart key={data.id} incrementQuantity={incrementQuantity} handleRemoveCart={removeFromCart} decrementQuantity={decrementQuantity} productQuantity={productQuantity} id={data.id} image={data.image} quantity={data.quantity} alt={data.name} name={data.name} price={data.price} discount={data.discount_price} extraoff={data.discount_percentage} company={data.company.name} />
                                    ))}
                                </div>
                            </div>

                            <div className=" absolute bottom-0 left-0 right-0 p-4 bg-warning_extra_light shadow-3xl">
                                <div className=" mb-2 flex items-center justify-between font-semibold text-secondary">
                                    <p>Subtotal</p>
                                    <p>৳ {subTotal}</p>
                                </div>
                                <div className=" mb-4 flex items-center justify-between font-semibold text-secondary">
                                    <p>Discount (-)</p>
                                    <p>৳ {parseFloat(discount.toFixed(2))}</p>
                                </div>
                                <Button onClick={() => openModal()} className={" bg-warning_main hover:bg-warning_dark w-full text-white !font-semibold"}>
                                    continue to checkout: ৳ {parseFloat(total.toFixed(2))}
                                </Button>
                            </div>
                        </div>
                        {isOpen && (
                            <div className=" fixed inset-0 flex items-center justify-center z-30">
                                <div className="fixed inset-0 bg-[#0006] dark:bg-white/20" onClick={closeModal}></div>
                                <form onSubmit={handleSubmit(onSubmit)} className=" px-6 py-10 bg-warning_extra_light z-50 rounded-2xl">
                                    <div className=" flex items-center justify-center mb-4">
                                        <Image src={"/assets/icons/confirm.svg"} height={64} width={64} alt="confirm" className=" h-16 w-16" />
                                    </div>

                                    <h6 className=" text-H6 text-center font-bold text-warning_main leading-7 mb-12">
                                        Are you want to confirm your <br /> order?
                                    </h6>
                                    <div className=" flex items-center justify-around">
                                        <Button type="submite" className={" bg-warning_main hover:bg-warning_dark  text-white !font-semibold"}>
                                            Yes
                                        </Button>
                                        <Button onClick={() => closeModal()} className={" bg-warning_main hover:bg-warning_dark  text-white !font-semibold"}>
                                            No
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        )}

                        <AlartModal message={message} success isOpen={success} openModal={openSuccess} closeModal={closeSuccess} />
                    </>
                ) : (
                    <div className="flex justify-center items-center h-full md:-mt-14">
                        <div>
                            <Lottie className="h-36 " loop={true} animationData={cartLottie} />
                            <h4 className="text-H6 font-semibold mb-4 text-center">Your Carts is Empty</h4>
                            <p className="text-center mb-8 text-secondary">
                                Looks like you haven’t made your choice yet, <br /> add all your favorite products
                            </p>
                            <div className="flex justify-center">
                                <div className="w-10/12">
                                    <Link href={"/"}>
                                        <Button onClick={onClose} className={"w-full text-white bg-primary_main hover:bg-primary_dark"}>
                                            Start Shopping
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Drawer>
        </>
    );
};

export default CartDrawer;
