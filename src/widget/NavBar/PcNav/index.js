"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsPerson } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

import Button from "@/components/Button";

const PcNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="w-full flex items-center z-50 top-0 transition-all duration-[400ms] ease-out">
            <div className="w-full h-full shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] bg-paper_bg">
                <div className="w-full max-w-xl mx-auto px-4">
                    <div className="w-full h-[4.5rem]  flex justify-between items-center gap-2 ">
                        <div className=" flex items-center gap-16">
                            <Link href={"/"}>
                                <Image height={28} width={104} alt="logo" src={"/assets/logos/2024-03-20T04-26-32.799Z-ostad_logo_light@512x (2).png"} className=" h-7 w-auto" />
                            </Link>
                            <div className=" md:flex hidden items-center justify-start gap-8 relative ">
                                <Link href={"/free-course"}>Company</Link>
                                <Link href={"/free-course"}>Flash Sell</Link>
                            </div>
                        </div>
                        <div>
                            <input placeholder="Search product..." type="text" name="name" className={`focus:ring-1 w-430 text-body1 placeholder:font-normal font-normal focus:ring-success_main hover:ring-success_main hover:shadow-input focus:shadow-input px-4 py-1  bg-white rounded-full focus:outline-none ring-1 ring-success_main focus:border-transparent`} />
                        </div>
                        <div className=" flex items-center gap-8">
                            <Link href={"#"}>
                                <button className=" flex flex-col items-center justify-center text-body2">
                                    <BsPerson className="w-6 h-6" />
                                    Account
                                </button>
                            </Link>
                            <Link href={"#"}>
                                <button className=" flex flex-col items-center justify-center text-body2">
                                    <MdOutlineShoppingBag className="w-6 h-6" />
                                    Carts
                                </button>
                            </Link>
                            <Link href={"#"}>
                                <button className=" flex flex-col items-center justify-center text-body2">
                                    <div className=" relative">
                                        <IoIosNotifications className="w-6 h-6" />
                                        <div className=" rounded-full bg-warning_main h-3 w-3 absolute -top-0 -right-0 text-xxs flex justify-center items-center">12</div>
                                    </div>
                                    Notifications
                                </button>
                            </Link>

                            <Link href={"/login"}>
                                <Button className={" bg-warning_main hover:bg-warning_dark flex items-center justify-center gap-2"}>
                                    sign in
                                    <BsArrowRight size={18} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PcNav;
