"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import dynamic from "next/dynamic";
import { HiOutlineArrowLeft } from "react-icons/hi";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });

import cartLottie from "../../../public/assets/LottieAnimations/emptyCart.json";
import { useCart } from "@/app/utilities/cartContex";
import Cart from "@/components/Cart";
import "react-modern-drawer/dist/index.css";
import useModal from "@/app/hooks/useModal";
import Image from "next/image";
import { useForm } from "react-hook-form";
import useOrder from "@/app/hooks/useOrder";

const CartDrawer = ({ open, onClose, direction, size }) => {
    const [message, setMessage] = useState("");
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, productQuantity } = useCart();
    const { isOpen, openModal, closeModal } = useModal();
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
        const orderData = {
            user_name: "Test",
            user_phone: "0123456789",
            area_id: 1,
            subtotal: subTotal,
            total: total,
            order_details: [
                { product_id: 17, name: "Product name", qty: 2, rate: 300, discount_amount: 50, discount_percentage: 50, net_amount: 500 },
                { product_id: 17, name: "Product name", qty: 2, rate: 300, discount_amount: 50, discount_percentage: 50, net_amount: 500 },
            ],
        };

        const { loading, success, error, responseData } = await order(orderData);
        if (success) {
            setMessage(responseData.message);
        }
    };

    console.log("first", isOpen);

    return (
        <>
            <Drawer open={open} onClose={onClose} direction={direction} className="md:!w-[450px] !w-full">
                {cartItems.length > 0 ? (
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
                                    <h6 className=" text-H6 text-center font-bold text-warning_main leading-7 mb-12">{message}</h6>
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
                    </div>
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
