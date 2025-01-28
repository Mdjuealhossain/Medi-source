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
    const [products, setProducts] = useState([]);

    // Quantity বাড়ানো
    const incrementQuantity = (id) => {
        setProducts((prevProducts) => prevProducts.map((product) => (product.id === id ? { ...product, quantity: product.quantity + 1 } : product)));
    };

    // Quantity কমানো
    const decrementQuantity = (id) => {
        // setProducts((prevProducts) => prevProducts.map((product) => (product.id === id ? { ...product, quantity: product.quantity - 1 } : product)));
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
        localStorage.setItem("stor_cart_data", JSON.stringify(updatedProducts));
    };

    const productQuantity = (id, count) => {
        console.log("product", count);
        // Convert input value to number
        const numericValue = count === "" ? 0 : parseInt(count, 10);
        if (!isNaN(numericValue) && numericValue >= 0) {
            setProducts((prevProducts) => prevProducts.map((product) => (product.id === id ? { ...product, quantity: numericValue } : product)));
        }
    };

    const handleRemoveCart = (id) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    };

    const hasCartItem = products.length > 0;

    const subTotal = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = products.reduce((sum, item) => sum + item.discount_price, 0);

    const total = subTotal - discount;

    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden");
            const storedCartData = localStorage.getItem("stor_cart_data");
            if (storedCartData) {
                setProducts(JSON.parse(storedCartData));
            } else {
                setProducts([]);
            }
        } else {
            setProducts([]);
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
            setProducts([]);
        };
    }, [open]);

    if (!open) return null;

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
                                {products.map((data) => (
                                    <Cart key={data.id} incrementQuantity={incrementQuantity} handleRemoveCart={handleRemoveCart} decrementQuantity={decrementQuantity} productQuantity={productQuantity} id={data.id} image={data.image} quantity={data.quantity} alt={data.name} name={data.name} price={data.price} discount={data.discount_price} extraoff={data.discount_percentage} company={data.company.name} />
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
                                <p>৳ {parseFloat(discount.toFixed(2))}</p>
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
