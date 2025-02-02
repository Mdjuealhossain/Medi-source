"use client";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

import Button from "../Button";
import ImageURL from "../ImageUrl";

const Card = ({ image, alt, name, price, discount, extraoff, company, isAdded, handleSelectedItem }) => {
    const previousValue = price + discount;
    return (
        <div className="border bg-white border-divider flex flex-col h-full rounded-lg overflow-hidden">
            <div className=" relative">
                <div className={`lg:h-200 md:h-150 h-100 `}>
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

            <Button onClick={handleSelectedItem} className={" bg-warning_main hover:bg-warning_dark text-white !rounded-none"}>
                <MdOutlineShoppingCart size={18} />
                {isAdded ? "Added" : "Add to card"}
            </Button>
        </div>
    );
};

export default Card;
