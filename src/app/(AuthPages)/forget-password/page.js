import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowLeft } from "react-icons/hi";

import Divider from "@/components/Divider";
import Container from "@/components/Container";
import ForgetForm from "@/widget/ForgetForm";
import { BsArrowLeft } from "react-icons/bs";

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
                            <Link href={"/login"} className="absolute lg:left-[60px] md:left-7 xs:left-5 left-2">
                                <BsArrowLeft className="text-H4" />
                            </Link>
                        </div>
                        <div className="pt-2 px-2 pb-2 xs:px-5 md:pt-3 md:px-7 md:pb-5 lg:pt-6 lg:px-[60px] lg:pb-10">
                            <h3 className="mb-3 lg:mb-6 text-warning_main font-semibold text-H3">Forgot Password</h3>
                            <p className="mb-5 lg:mb-8 text-body2 text-secondary">Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
                            <ForgetForm />
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
                </div>
            </Container>
        </div>
    );
};

export default ForgetPassword;
