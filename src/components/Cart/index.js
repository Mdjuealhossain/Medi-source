"use client";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

import ImageURL from "../ImageUrl";

const Cart = ({ company, name, image, alt, price, discount, handleRemoveCart, id, count, setCount }) => {
    const handleQuantityChange = (delta) => {
        setCount((prev) => Math.max(1, prev + delta));
    };

    return (
        <div className=" relative flex gap-4 items-center bg-white p-3 rounded-lg">
            <div className=" h-100 overflow-hidden rounded-lg">
                <ImageURL image={image} className={" h-auto w-auto max-h-full max-w-full"} height={100} width={150} alt={alt} />
            </div>
            <div className=" flex flex-col gap-0.5">
                <p className=" text-secondary capitalize">{company}</p>
                <p className=" font-semibold text-subtitle1">{name}</p>
                <div className=" flex gap-1 text-subtitle2">
                    <p>৳ {price}</p>
                    <p>
                        ({price} * {count})
                    </p>
                    <span className=" relative text-secondary">
                        <p>৳ {discount}</p>
                        <span className=" h-px bg-divider w-full absolute top-1/2"></span>
                    </span>
                </div>
                <div className=" flex mt-1">
                    <div className=" flex border border-divider rounded py-1">
                        <button onClick={() => handleQuantityChange(-1)} disabled={count <= 1} className={`px-3 cursor-pointer ${count <= 1 ? "cursor-not-allowed" : "cursor-pointer"}`}>
                            -
                        </button>
                        <div className=" w-px bg-divider"></div>
                        <input maxLength={3} value={count} onChange={(e) => setCount(e.target.value)} className=" w-8 text-center focus:border-transparent focus:ring-transparent  py-1 ring-transparent focus:outline-none ring-1" />
                        <div className=" w-px bg-divider"></div>
                        <button onClick={() => handleQuantityChange(1)} className={`px-3 cursor-pointer`}>
                            +
                        </button>
                    </div>
                </div>
            </div>
            <span onClick={() => handleRemoveCart(id)} className=" p-2 rounded-tl-lg absolute right-0 bottom-0 cursor-pointer bg-warning_extra_light">
                <MdDelete size={18} className=" text-warning_light " />
            </span>
        </div>
    );
};

export default Cart;
