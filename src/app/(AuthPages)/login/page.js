"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { BsCheck } from "react-icons/bs";

import Button from "@/components/Button";
import Container from "@/components/Container";
import ImageURL from "@/components/ImageUrl";

const LogIn = () => {
    const [selectedCheckbox, setSelectedCheckbox] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <div className=" h-screen flex justify-center items-center">
            <Container className={"!max-w-lg "}>
                <div className=" flex gap-8 justify-center items-center ">
                    <div className="shadow-sign max-w-sm w-full rounded bg-white">
                        <div className="pt-4 lg:pt-8 pb-3 lg:pb-6 border-b border-divider flex items-center justify-center">
                            <Link href={"/"} className=" h-10 flex items-center justify-center">
                                <Image height={40} width={304} alt="logo" src={`/assets/logos/logo.png`} className=" min-w-100 w-auto max-h-full h-10" />
                            </Link>
                        </div>
                        <div className="pt-2 px-2 pb-2 xs:px-5 md:pt-3 md:px-7 md:pb-5 lg:pt-6 lg:px-[60px] lg:pb-10">
                            <h3 className="mb-3 lg:mb-6 text-warning_main font-semibold text-H3 ">Login</h3>
                            <form>
                                <div>
                                    <div className="mb-5">
                                        <label>
                                            <span className="flex font-semibold mb-3">
                                                Phone Number
                                                <FaStarOfLife size={6} className="text-error_main" />
                                            </span>
                                        </label>
                                        <input type="number" placeholder="Enter your phone number" className="p-2 w-full rounded bg-white border border-warning_main text-black text-body2 " />
                                    </div>

                                    <div className="mb-5">
                                        <label>
                                            <span className="flex font-semibold mb-3">
                                                Password
                                                <FaStarOfLife size={6} className="text-error_main" />
                                            </span>
                                        </label>
                                        <span className="relative">
                                            <input type={isShowPassword ? "text" : "password"} placeholder="Enter your password" className="p-2 w-full rounded bg-white border border-warning_main text-black text-body2" />
                                            {isShowPassword ? (
                                                <span onClick={() => setIsShowPassword(false)} className="absolute right-2 top-2 hover:cursor-pointer">
                                                    <IoEyeSharp size={16} className="text-warning_main" />
                                                </span>
                                            ) : (
                                                <span onClick={() => setIsShowPassword(true)} className="absolute right-2 top-2 hover:cursor-pointer">
                                                    <IoEyeOff size={16} className="text-warning_main" />
                                                </span>
                                            )}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center mb-6">
                                        <label className="flex items-center hover:cursor-pointer gap-3 text-body2 font-normal leading-normal w-fit h-min" onChange={() => setSelectedCheckbox((prev) => !prev)}>
                                            <div className="relative flex items-center">
                                                <input type="checkbox" className={`rounded h-4 w-4 ${selectedCheckbox == true ? " bg-warning_main text-white" : "bg-white"} border border-warning_main appearance-none`} />
                                                <BsCheck size={16} className="absolute top-0 text-white" />
                                            </div>
                                            <p className="text-body2">Remember Me</p>
                                        </label>

                                        <Link href="/forget-password">
                                            <p className="font-semibold text-warning_main">Forgot Password?</p>
                                        </Link>
                                    </div>

                                    <div className="mb-3 lg:mb-6">
                                        <Button className={" bg-warning_main w-full hover:bg-warning_dark text-white"}>Log In</Button>
                                    </div>
                                </div>
                            </form>

                            <div>
                                <p className="mb-3 lg:mb-6 text-center text-subtitle2">
                                    Don’t have an account?{" "}
                                    <Link href="/logout">
                                        <span className=" text-warning_main font-semibold capitalize">signup</span>
                                    </Link>
                                </p>
                                <p className="text-center text-subtitle2">
                                    <span className=" text-warning_main font-semibold capitalize">help line: </span> {"01754543235"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" hidden md:flex h-500 items-center justify-center">
                        <ImageURL image={"/assets/image/register/sign-in.gif"} alt="sign in" height={500} width={500} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default LogIn;
