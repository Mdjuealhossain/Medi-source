import React from "react";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import OTPForm from "@/widget/OTPForm";
import { BsArrowLeft } from "react-icons/bs";

const OTP = () => {
    return (
        <div className=" h-screen flex justify-center items-center bg-error_extra_light">
            <Container className={"!max-w-lg flex items-center justify-center "}>
                <div className="shadow-lg max-w-sm w-full rounded bg-error_extra_light">
                    <div className="pt-4 lg:pt-8 relative pb-3 lg:pb-6 border-b border-divider flex items-center justify-center">
                        <Link href={"/"} className=" h-10 flex items-center justify-center">
                            <Image height={40} width={304} alt="logo" src={`/assets/logos/logo.png`} className=" min-w-100 w-auto max-h-full h-10" />
                        </Link>
                        <Link href={"/forget-password"} className="absolute lg:left-[60px] md:left-7 xs:left-5 left-2">
                            <BsArrowLeft className="text-H4" />
                        </Link>
                    </div>
                    <div className="pt-2 px-2 pb-2 xs:px-5 md:pt-3 md:px-7 md:pb-5 lg:pt-6 lg:px-[60px] lg:pb-10">
                        <h3 className="mb-3 lg:mb-6 text-warning_main font-semibold text-H3">Enter OTP</h3>
                        <p className="mb-5 lg:mb-8 text-body2 text-secondary">A 6 digit code has been sent to your email.</p>
                        <OTPForm />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OTP;
