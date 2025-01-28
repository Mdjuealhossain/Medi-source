"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsPerson } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineLogin } from "react-icons/md";
import { RiTimerFlashLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { MdOutlineWorkHistory } from "react-icons/md";

import { FilteredPop } from "@/components/FilteredPop";
import GradientText from "@/components/GradiantText";
import Dropdown from "@/components/Dropdown";
import CartDrawer from "@/widget/CartDrawer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import NotificationDrawer from "@/widget/NotificationDrawer";
import { usePathname } from "next/navigation";

const PcNav = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isDrowp, setIsDrowp] = useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isNoti, setIsNoti] = React.useState(false);

    const pathname = usePathname();

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    const toggleNotiDrawer = () => {
        setIsNoti((prevState) => !prevState);
    };

    const initialCheckboxData = [
        { id: 1, label: "ACI limited", checked: false },
        { id: 2, label: "ACI limited", checked: false },
        { id: 3, label: "ACI limited", checked: false },
        { id: 4, label: "ACI limited", checked: false },
        { id: 5, label: "ACI limited", checked: false },
        { id: 6, label: "ACI limited", checked: false },
        { id: 7, label: "ACI limited", checked: false },
        { id: 8, label: "ACI limited", checked: false },
        { id: 9, label: "ACI limited", checked: false },
        { id: 13, label: "ACI limited", checked: false },
        { id: 14, label: "ACI limited", checked: false },
        { id: 15, label: "ACI limited", checked: false },
        { id: 16, label: "ACI limited", checked: false },
        { id: 17, label: "ACI limited", checked: false },
        { id: 18, label: "ACI limited", checked: false },
        { id: 19, label: "ACI limited", checked: false },
    ];

    const options = [
        { name: "profile", icon: <CgProfile className=" text-warning_main" />, url: "/profile" },
        { name: "order history", icon: <FaBagShopping className=" text-warning_main" />, url: "/order-history" },
        { name: "change password", icon: <RiLockPasswordFill className=" text-warning_main" />, url: "/change-password" },
        { name: "log out", icon: <MdOutlineLogin className=" text-warning_main" />, url: "/logout" },
    ];

    const handleOpenPopup = () => setIsPopupOpen((prev) => !prev);
    const handleClosePopup = () => setIsPopupOpen(false);

    const handleConfirm = (selectedOptions) => {
        alert(`নির্বাচিত অপশন: ${selectedOptions.map((cb) => cb.label).join(", ") || "কোনোটি নয়"}`);
        console.log("নির্বাচিত অপশন:", selectedOptions);
    };

    return (
        <>
            <div className=" sticky top-0 z-50  w-full shadow-lg">
                <div className="w-full h-full  bg-paper_bg">
                    <Container>
                        <div className="w-full md:h-[4.5rem] py-2 relative flex justify-between items-center gap-1 ">
                            <div className=" flex items-center gap-4 xl:gap-16">
                                <Link href={"/"} className=" md:h-10 h-5 flex items-center justify-center">
                                    <Image height={40} width={304} alt="logo" src={`/assets/logos/logo.png`} className=" min-w-100 w-auto max-h-full h-10" />
                                </Link>
                                <div className=" md:flex hidden items-center justify-start lg:gap-8 md:gap-4 relative ">
                                    <Link onClick={handleOpenPopup} href={"#"} className="group md:h-[4.5rem] flex flex-col justify-center">
                                        Company
                                        <span className={`  h-px bg-warning_main transition-width duration-300 ease-in-out w-0 group-hover:w-full`}></span>
                                    </Link>
                                    <Link href={"/flash-sell"} className="group flex-col hidden md:flex">
                                        <span className={"border-warning_light shadow-flash px-4 py-1 !rounded-full transform transition duration-500 hover:-translate-y-1"}>
                                            <GradientText text={"Flash Sell"} />
                                        </span>
                                    </Link>
                                </div>
                                <FilteredPop title="filtered by" isOpen={isPopupOpen} checkboxData={initialCheckboxData} onClose={handleClosePopup} onConfirm={handleConfirm} />
                            </div>
                            <div className=" relative">
                                <input placeholder="Search product..." type="text" name="name" className={`pr-4 pl-8 focus:ring-1 xl:w-430 md:w-270 lg:w-300 w-full text-body1 placeholder:font-normal font-normal focus:ring-warning_main hover:ring-warning_main hover:shadow-input focus:shadow-input py-1 bg-warning_extra_light rounded-full ring-warning_main focus:outline-none ring-1  placeholder:text-warning_main focus:border-transparent`} />
                                <GoSearch className=" absolute top-2 left-3 text-warning_main" />
                            </div>
                            <div className=" md:inline-flex relative items-center lg:gap-8 md:gap-4 hidden">
                                <Link href={"/login"} className="group md:h-[4.5rem] capitalize flex-col flex justify-center" onClick={() => setIsDrowp((prev) => !prev)}>
                                    <div className=" flex flex-col items-center justify-center text-body2">
                                        <BsPerson className="w-6 h-6" />
                                        log in
                                    </div>
                                    <span className={`  h-px bg-warning_main transition-width duration-300 ease-in-out w-0 group-hover:w-full`}></span>
                                </Link>
                                {isDrowp && <Dropdown options={options} onClose={() => setIsDrowp((prev) => !prev)} />}
                                <Link href={"#"} onClick={toggleDrawer} className="group  flex flex-col ">
                                    <div className=" flex flex-col items-center justify-center text-body2">
                                        <div className=" relative">
                                            <MdOutlineShoppingBag className="w-6 h-6" />
                                            <div className=" rounded-full bg-primary_main text-white h-3 w-3 absolute -top-1 -right-1 text-xxs flex justify-center items-center">12</div>
                                        </div>
                                        Carts
                                    </div>
                                    <span className={`  h-px bg-warning_main transition-width duration-300 ease-in-out w-0 group-hover:w-full`}></span>
                                </Link>
                                <div onClick={toggleNotiDrawer} className="group  flex flex-col cursor-pointer">
                                    <div className=" flex flex-col items-center justify-center text-body2">
                                        <div className=" relative">
                                            <IoIosNotifications className="w-6 h-6" />
                                            <div className=" rounded-full bg-warning_main text-white h-3 w-3 absolute -top-1 -right-1 text-xxs flex justify-center items-center">12</div>
                                        </div>
                                        Notifications
                                    </div>
                                    <span className={`  h-px bg-warning_main transition-width duration-300 ease-in-out w-0 group-hover:w-full`}></span>
                                </div>
                            </div>
                            <Link href={"/notifications"} className="md:hidden bg-warning_main p-2 rounded-lg">
                                <IoIosNotifications className="w-5 h-5 text-white" />
                            </Link>
                            <div onClick={handleOpenPopup} className="md:hidden bg-warning_main p-2 rounded-lg">
                                <Image src={"/assets/icons/filter.svg"} alt="filter" height={20} width={20} className="!h-5 !w-5" />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="md:hidden fixed bottom-0 left-0 right-0 w-full shadow-lg z-50">
                <div className="w-full h-full  bg-paper_bg px-4">
                    <ul className="flex items-center justify-between  py-2">
                        <li>
                            <Link href={"/"} className={`flex flex-col items-center justify-center text-caption ${pathname == "/" ? " text-warning_main" : "text-secondary"}`}>
                                <GoHome className="w-4 h-4" />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={"/flash-sell"} className={`flex flex-col items-center justify-center text-caption ${pathname == "/flash-sell" ? " text-warning_main" : "text-secondary"}`}>
                                <RiTimerFlashLine className="w-4 h-4" />
                                Flash Sell
                            </Link>
                        </li>

                        <li>
                            <Link href={"#"} className={`flex flex-col items-center justify-center text-caption ${pathname == "/cart" ? " text-warning_main" : "text-secondary"}`}>
                                <div className=" relative">
                                    <MdOutlineShoppingBag className="w-4 h-4" />
                                    <div className=" rounded-full bg-primary_main text-white h-3 w-3 absolute -top-1 -right-1 text-xxs flex justify-center items-center">12</div>
                                </div>
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link href={"/history"} className={`flex flex-col items-center justify-center text-caption ${pathname == "/history" ? " text-warning_main" : "text-secondary"}`}>
                                <div className=" relative">
                                    <MdOutlineWorkHistory className="w-4 h-4" />
                                    <div className=" rounded-full bg-warning_main text-white h-3 w-3 absolute -top-1 -right-1 text-xxs flex justify-center items-center">12</div>
                                </div>
                                History
                            </Link>
                        </li>
                        <li>
                            <Link href={"/profile"} className={`flex flex-col items-center justify-center text-caption ${pathname == "/profile" ? " text-warning_main" : "text-secondary"}`}>
                                <BsPerson className="w-4 h-4" />
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className=" hidden md:inline-block">
                <NotificationDrawer open={isNoti} onClose={toggleNotiDrawer} direction="right" size={450} />
            </div>
            <CartDrawer open={isOpen} onClose={toggleDrawer} direction="right" size={450} />
        </>
    );
};

export default PcNav;
