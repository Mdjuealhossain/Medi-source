"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi";

import Button from "@/components/Button";
import Divider from "@/components/Divider";
import ImageURL from "@/components/ImageUrl";
import Container from "@/components/Container";

const ForgetPassword = () => {
    return (
        <div className=" h-screen flex justify-center items-center">
            <Container className={"!max-w-lg "}>
                <div className=" flex gap-8 justify-center items-center ">
                    <div className="shadow-sign max-w-sm w-full rounded bg-white">
                        <div className="pt-4 lg:pt-8 pb-3 lg:pb-6 border-b border-divider relative flex items-center justify-center">
                            <Link href={"/"} className=" h-10 flex items-center justify-center">
                                <Image height={40} width={304} alt="logo" src={`/assets/logos/logo.png`} className=" min-w-100 w-auto max-h-full h-10" />
                            </Link>
                            <Link href={"/login"} className=" absolute left-4 top-1/2">
                                <HiOutlineArrowLeft size={18} />
                            </Link>
                        </div>
                        <div className="pt-2 px-2 pb-2 xs:px-5 md:pt-3 md:px-7 md:pb-5 lg:pt-6 lg:px-[60px] lg:pb-10">
                            <h3 className="mb-3 lg:mb-6 text-warning_main font-semibold text-H3">Forgot Password</h3>
                            <p className="mb-5 lg:mb-8 text-body2 text-secondary">Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
                            <form>
                                <div>
                                    <div className="mb-5">
                                        <label>
                                            <span className="flex font-semibold mb-3">
                                                Phone Number
                                                <FaStarOfLife size={6} className="text-error_main" />
                                            </span>
                                        </label>
                                        <input type="number" placeholder="Enter your phone number" className="p-2 w-full rounded bg-white border border-divider text-black text-body2 " />
                                    </div>
                                    <div className="mb-3 lg:mb-6">
                                        <Link href={"/otp"}>
                                            <Button className={"bg-warning_main w-full hover:bg-warning_dark text-white capitalize"}>Send code</Button>
                                        </Link>
                                    </div>
                                </div>
                            </form>

                            <Divider />
                            <div>
                                <p className="text-center text-subtitle2">
                                    Already have an account?
                                    <Link href={"/login"}>
                                        <span className=" text-warning_main font-semibold capitalize">Login</span>
                                    </Link>
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

export default ForgetPassword;
