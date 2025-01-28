"use client";
import React from "react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { HiDevicePhoneMobile, HiMiniPhoneArrowUpRight } from "react-icons/hi2";

const SlimNavbarForTopArea = () => {
    return (
        <div className="h-[36px] bg-slim-nav bg-[length:200%_auto] animate-textanim">
            <div className="container mx-auto max-w-xl px-4 h-full flex justify-between  items-center text-white font-semibold text-subtitle2">
                <div>
                    <Typewriter words={["Great Festive Sale Deals", "Welcome to my App"]} loop={true} cursor cursorStyle="|" typeSpeed={50} deleteSpeed={50} delaySpeed={3000} />
                </div>
                <div className=" flex items-center gap-3 lg:gap-5">
                    <Link href={"https://play.google.com/store/apps/details?id=wiztech.medisource.app&pli=1"} className="flex items-center gap-1.5  hover:cursor-pointer">
                        <HiDevicePhoneMobile size={18} />
                        <p>Get App</p>
                    </Link>
                    <div className="h-4 border-l-2"></div>
                    <Link href={"#"} className="flex items-center gap-2 hover:cursor-pointer">
                        <HiMiniPhoneArrowUpRight size={18} />
                        <p>01754343239</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SlimNavbarForTopArea;
