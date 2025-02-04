import React from "react";
import { MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

import ImageURL from "../ImageUrl";

const Cart = ({ company, name, image, alt, price, discount, handleRemoveCart, id, productQuantity, incrementQuantity, decrementQuantity, quantity }) => {
    const previousValue = price + discount;
    return (
        <div className=" relative flex gap-4 items-center bg-white p-2 rounded-lg">
            <div className=" h-100 overflow-hidden rounded-lg">
                <ImageURL image={image} className={" h-auto w-auto max-h-full max-w-full"} height={100} width={150} alt={alt} />
            </div>
            <div className=" flex flex-col gap-0.5">
                <p className=" text-secondary capitalize text-subtitle2">{company}</p>
                <p className=" font-semibold text-subtitle1">{name}</p>
                <div className=" flex gap-1 text-subtitle2">
                    <p>৳ {price}</p>
                    <p>
                        ({price} * {quantity})
                    </p>
                    <span className=" relative text-secondary">
                        <p>৳ {parseFloat(previousValue.toFixed(2))}</p>
                        <span className=" h-px bg-secondary w-full absolute top-1/2"></span>
                    </span>
                </div>
                <div className=" flex mt-1 w-auto">
                    <div className=" flex border border-divider rounded !h-auto">
                        <button onClick={() => decrementQuantity(id)} disabled={quantity <= 1} className={`bg-warning_extra_light h-5 w-5 flex items-center justify-center ${quantity <= 1 ? "cursor-not-allowed" : "cursor-pointer"}`}>
                            <FiMinus size={12} className="text-warning_dark" />
                        </button>
                        <div className=" w-px bg-divider"></div>
                        <input maxLength={3} value={quantity || ""} onChange={(e) => productQuantity(id, e.target.value)} className=" h-5 w-10 appearance-none text-center text-body2 focus:border-transparent focus:ring-transparent ring-transparent focus:outline-none ring-1" />
                        <div className=" w-px bg-divider"></div>
                        <button onClick={() => incrementQuantity(id)} className={`bg-warning_extra_light h-5 w-5 flex items-center justify-center cursor-pointer`}>
                            <IoAdd size={12} className="text-warning_dark" />
                        </button>
                    </div>
                </div>
            </div>
            <span onClick={() => handleRemoveCart(id)} className=" p-2 rounded-tl-lg absolute right-0 bottom-0 cursor-pointer bg-warning_extra_light">
                <MdDelete size={18} className=" text-warning_main " />
            </span>
        </div>
    );
};

export default Cart;
