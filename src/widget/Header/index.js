"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import SearchBar from "@/components/SearchBar";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full flex items-center z-50 top-0 transition-all duration-[400ms] ease-out">
            <div className="w-full h-full shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] bg-paper_bg">
                <div className="w-full max-w-xl mx-auto px-4">
                    <div className="w-full h-[4.5rem]  flex justify-between items-center gap-2 ">
                        <div className=" flex items-center gap-4">
                            <Link href={"/"}>
                                <Image height={28} width={104} alt="logo" src={"/assets/logos/2024-03-20T04-26-32.799Z-ostad_logo_light@512x (2).png"} className=" h-7 w-auto" />
                            </Link>
                            <div className=" md:flex hidden items-center justify-start gap-4 relative ">
                                <button onClick={toggleDropdown} className="w-170 min-w-170 md:h-10 flex items-center justify-center md:!justify-start md:gap-2 rounded-full md:!rounded-[48px] md:!pl-3 md:!pr-1.5 border bg-secondary_light border-gray_500 hover:!bg-ostad-blue-opac active:scale-90 transition-all duration-300 cursor-text">
                                    <Image height={28} width={28} alt="search-icon" className="w-6 h-6 " src="/assets/icons/2024-03-10T04-41-51.748Z-ostad-search.svg" />
                                    <p className="flex whitespace-nowrap text-body2 text-secondary">কোর্স সার্চ করুন</p>
                                </button>
                                <Link href={"/free-course"} className=" font-semibold text-body2">
                                    কোর্স
                                </Link>

                                {isOpen && <SearchBar close={toggleDropdown} />}
                            </div>
                        </div>
                        <Link href={"#"}>
                            <Button className={" bg-warning_main hover:bg-warning_dark flex items-center justify-center gap-2"}>
                                লগিন/সাইনআপ
                                <Image height={18} width={18} alt="arrow" src={"/assets/icons/arrow_right.svg"} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
