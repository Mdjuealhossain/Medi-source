"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@/components/Button";
import Container from "@/components/Container";
import useOTP from "@/app/hooks/useOTP";
import { useRouter } from "next/navigation";
import { validationSchema } from "@/app/staticData/otp";

const OTP = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const { otpCode } = useOTP();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (formdata) => {
        const result = await otpCode(formdata);
        if (result.responseData.status) {
            // router.push("/");
        }
        console.log("data", result);
        reset();
    };

    const handleChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // কার্সর পরবর্তী ইনপুটে সরিয়ে দেওয়া
        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    };

    return (
        <div className=" h-screen flex justify-center items-center bg-error_extra_light">
            <Container className={"!max-w-lg flex items-center justify-center "}>
                <div className="shadow-lg max-w-sm w-full rounded bg-error_extra_light">
                    <div className="pt-4 lg:pt-8 relative pb-3 lg:pb-6 border-b border-divider flex items-center justify-center">
                        <Link href={"/"} className=" h-10 flex items-center justify-center">
                            <Image height={40} width={304} alt="logo" src={`/assets/logos/logo.png`} className=" min-w-100 w-auto max-h-full h-10" />
                        </Link>
                        <Link href={"/forget-password"} className=" absolute left-4 top-1/2">
                            <HiOutlineArrowLeft size={18} />
                        </Link>
                    </div>
                    <div className="pt-2 px-2 pb-2 xs:px-5 md:pt-3 md:px-7 md:pb-5 lg:pt-6 lg:px-[60px] lg:pb-10">
                        <h3 className="mb-3 lg:mb-6 text-warning_main font-semibold text-H3">Enter OTP</h3>
                        <p className="mb-5 lg:mb-8 text-body2 text-secondary">A 6 digit code has been sent to your email.</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <div className="mb-5">
                                    <label>
                                        <span className="flex text-sm font-medium mb-3">
                                            Verification Code
                                            <FaStarOfLife size={6} className="text-error_main" />
                                        </span>
                                    </label>
                                    <div className="flex gap-3 xs:gap-6 h-8 items-center justify-between">
                                        {otp.map((_, index) => (
                                            <div key={index}>
                                                <input id={`otp-${index}`} {...register(`otp[${index}]`)} type="text" maxLength="1" value={otp[index]} onChange={(e) => handleChange(e.target.value, index)} onKeyDown={(e) => handleKeyDown(e, index)} className={`rounded bg-transparent ring-1 ring-divider text-center h-8 w-8 focus:outline-none focus:ring-1 focus:ring-warning_main`} />
                                            </div>
                                        ))}
                                        {errors.otp && <span className=" text-error_main text-sm mt-1">{errors.otp.message}</span>}
                                    </div>
                                </div>

                                <div className="mb-3 lg:mb-6">
                                    <Button type="submit" className={"bg-warning_main w-full hover:bg-warning_dark text-white capitalize"}>
                                        Verify Code
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OTP;
