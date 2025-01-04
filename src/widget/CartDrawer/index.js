"use client";
import Button from "@/components/Button";
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });

import cartLottie from "../../../public/assets/LottieAnimations/emptyCart.json";
import Cart from "@/components/Cart";
import "react-modern-drawer/dist/index.css";

const CartDrawer = ({ open, onClose, direction, size }) => {
    const [isCount, setIsCount] = useState(null);

    // State to manage cart data
    const [cartData, setCartData] = useState([
        { id: 1, company: "ACI limited", name: "Avbgdd 50/10 mg", imag: "/assets/image/home/course.jpg", alt: "aci", prev: 1200, price: 800 },
        { id: 2, company: "ACI limited", name: "Avbgdd 50/10 mg", imag: "/assets/image/home/course.jpg", alt: "aci", prev: 1230, price: 866 },
        { id: 3, company: "ACI limited", name: "Avbgdd 50/10 mg", imag: "/assets/image/home/course.jpg", alt: "aci", prev: 1400, price: 800 },
        { id: 4, company: "ACI limited", name: "Avbgdd 50/10 mg", imag: "/assets/image/home/course.jpg", alt: "aci", prev: 1230, price: 866 },
        { id: 5, company: "ACI limited", name: "Avbgdd 50/10 mg", imag: "/assets/image/home/course.jpg", alt: "aci", prev: 1400, price: 800 },
        { id: 6, company: "ACI limited", name: "Avbgdd 50/10 mg", imag: "/assets/image/home/course.jpg", alt: "aci", prev: 1230, price: 866 },
        { id: 7, company: "ACI limited", name: "Avbgdd 50/10 mg", imag: "/assets/image/home/course.jpg", alt: "aci", prev: 1400, price: 800 },
        { id: 8, company: "ACI limited", name: "Avbgdd 50/10 mg", imag: "/assets/image/home/course.jpg", alt: "aci", prev: 1230, price: 866 },
    ]);

    const handleCount = (num) => {
        setIsCount(num);
    };

    // Remove item from the cart
    const handleRemoveCart = (id) => {
        setCartData((prevCartData) => prevCartData.filter((item) => item.id !== id));
    };
    // Check if the cart is empty
    const hasCartItem = cartData.length > 0;

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

    const subTotal = cartData.reduce((sum, item) => (sum + item.price) * isCount, 0);
    const discount = cartData.reduce((sum, item) => (sum + item.prev - item.price) * isCount, 0);
    const total = subTotal - discount;

    console.log("jhbghkbnkjnkj", subTotal);

    return (
        <Drawer open={open} onClose={onClose} direction={direction} size={size}>
            <div className=" h-full">
                {hasCartItem ? (
                    <div className="h-full bg-secondary_bg flex justify-between flex-col">
                        <div>
                            <div className=" flex items-center justify-center flex-col px-4 py-2 bg-warning_extra_light">
                                <h6 className=" text-H6 font-semibold text-center">my cart</h6>
                                <p>Tue, Jan 4, 2025</p>
                            </div>
                            <div className=" px-6 py-2 h-700 overflow-auto no-scrollbar flex flex-col gap-2">
                                {cartData.map((data) => (
                                    <Cart id={data.id} handleCount={handleCount} handleRemoveCart={handleRemoveCart} key={data.id} company={data.company} name={data.name} image={data.imag} alt={data.alt} price={data.price} discount={data.prev} />
                                ))}
                            </div>
                        </div>
                        <div className=" p-4 bg-warning_extra_light">
                            <div className=" mb-2 flex items-center justify-between font-semibold text-secondary">
                                <p>Subtotal</p>
                                <p>৳ {subTotal}</p>
                            </div>
                            <div className=" mb-4 flex items-center justify-between font-semibold text-secondary">
                                <p>Discount (-)</p>
                                <p>৳ {discount}</p>
                            </div>
                            <Button className={" bg-warning_main hover:bg-warning_dark w-full text-white !font-semibold"}> continue to checkout: ৳ {total} </Button>
                        </div>
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
            </div>
        </Drawer>
    );
};

export default CartDrawer;
