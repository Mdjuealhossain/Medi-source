"use client";
import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";

import Button from "../Button";
import ImageURL from "../ImageUrl";

const Card = ({ handleWarning, status, image, alt, name, price, discount, extraoff, company, isAdded, handleSelectedItem, incrementQuantity, decrementQuantity, quantity, id, productQuantity }) => {
    const previousValue = price + discount;

    return (
        <div className="border bg-white border-divider flex flex-col h-full rounded-lg overflow-hidden">
            <div className=" relative">
                <div className={`lg:h-200 md:h-150 h-100 flex items-center justify-center overflow-hidden `}>
                    <ImageURL height={200} width={350} alt={alt} image={image} />
                </div>
                <div className=" absolute left-0 -top-0">
                    <span className=" text-subtitle2 bg-error_main text-white px-2 py-1 rounded-br-lg">{extraoff ? `${extraoff}% off` : "No available offer"}</span>
                </div>
            </div>
            <div className=" md:p-4 p-2 flex-1 flex flex-col ">
                <div className="md:mb-2 mb-1 md:gap-2 flex-col flex">
                    <h6 className={`text-H6 font-semibold `}>{name}</h6>
                    {company && <p className=" text-secondary capitalize">{company}</p>}
                </div>
                <div className=" flex items-center gap-2">
                    <p className=" font-bold">৳ {price}</p>
                    <span className=" relative text-secondary">
                        <p className=" text-subtitle2">৳ {parseFloat(previousValue.toFixed(2))}</p>
                        <span className=" h-px bg-secondary w-full absolute top-1/2"></span>
                    </span>
                </div>
            </div>

            {quantity ? (
                <div className=" flex bg-warning_extra_light w-full">
                    <button onClick={() => decrementQuantity(id)} disabled={quantity <= 1} className={` w-1/3 py-2   flex items-center justify-center  ${quantity <= 1 ? "cursor-not-allowed" : "cursor-pointer"}`}>
                        <FiMinus className="text-warning_dark text-base md:text-[22px]" />
                    </button>
                    <div className=" w-px bg-divider"></div>
                    <input maxLength={3} value={quantity || ""} onChange={(e) => productQuantity(id, e.target.value)} className="w-1/3  bg-transparent appearance-none text-center focus:border-transparent focus:ring-transparent ring-transparent focus:outline-none ring-1" />
                    <div className=" w-px bg-divider"></div>
                    <button onClick={() => incrementQuantity(id)} className={`w-1/3 py-2  flex items-center justify-center cursor-pointer`}>
                        <IoAdd className="text-warning_dark text-base md:text-[22px]" />
                    </button>
                </div>
            ) : (
                <div className=" w-full">
                    {status > 0 ? (
                        <Button onClick={handleSelectedItem} className={" bg-warning_main hover:bg-warning_dark text-white !rounded-none w-full"}>
                            <MdOutlineShoppingCart />
                            Add to card
                        </Button>
                    ) : (
                        <Button onClick={handleWarning} className={" capitalize bg-error_main  text-white !rounded-none w-full"}>
                            <MdOutlineRemoveShoppingCart size={18} />
                            out of stock
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Card;
