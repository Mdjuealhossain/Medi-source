import React from "react";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";

import Button from "../Button";

const Card = ({ image, alt, name, price, discount, extraoff, company }) => {
    return (
        <div className="border bg-white border-divider flex flex-col h-full rounded-lg overflow-hidden">
            <div className=" relative">
                <div className={`lg:h-200 md:h-150 h-100 flex justify-center items-center overflow-hidden`}>
                    <Image height={200} width={350} alt={alt} src={image} className="w-full max-w-full max-h-full h-full object-cover" />
                </div>
                <div className=" absolute left-0 -top-0">
                    <span className=" text-subtitle2 bg-error_main text-white px-2 py-1 rounded-br-lg">{extraoff}% off</span>
                </div>
            </div>
            <div className=" md:p-4 p-2 flex-1 flex flex-col">
                <div className="md:mb-2 mb-1">
                    <h6 className={`text-H6 font-semibold md:mb-2 `}>{name}</h6>
                    <p className=" text-secondary capitalize">{company}</p>
                </div>
                <div className=" flex items-center gap-2">
                    <p className=" font-bold">৳ {price}</p>
                    <span className=" relative text-secondary">
                        <p className=" text-subtitle2">৳ {discount}</p>
                        <span className=" h-px bg-divider w-full absolute top-1/2"></span>
                    </span>
                </div>
            </div>
            <Button className={" bg-warning_main hover:bg-warning_dark text-white !rounded-none"}>
                <MdOutlineShoppingCart size={18} />
                Add to card
            </Button>
        </div>
    );
};

export default Card;
