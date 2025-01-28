"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaStarOfLife } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { BsCheck } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import Button from "@/components/Button";
import Container from "@/components/Container";
import useReset from "@/app/hooks/useReset";

const validationSchema = Yup.object({
    phone: Yup.string()
        .matches(/^[0-9]{11}$/, "Phone number must be exactly 10 digits") // ফোন নম্বর ১০ ডিজিট হতে হবে
        .required("Phone number is required"),

    new_password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirm_password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const ResetPassword = () => {
    const [selectedCheckbox, setSelectedCheckbox] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConPassword, setIsShowConPassword] = useState(false);
    const { resetPassword } = useReset();
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
        const { loading, success, error, responseData } = await resetPassword(formdata);
        if (responseData.status) {
            router.push("/");
        }
        reset();
    };

    return (
        <div className=" h-screen flex justify-center items-center">
            <Container className={"!max-w-lg "}>
                <div className=" flex justify-center items-center ">
                    <div className="shadow-sign max-w-sm w-full rounded bg-white">
                        <div className="pt-4 lg:pt-8 pb-3 lg:pb-6 border-b border-divider flex items-center justify-center">
                            <Link href={"/"} className=" h-10 flex items-center justify-center">
                                <Image height={40} width={304} alt="logo" src={`/assets/logos/logo.png`} className=" min-w-100 w-auto max-h-full h-10" />
                            </Link>
                        </div>
                        <div className="pt-2 px-2 pb-2 xs:px-5 md:pt-3 md:px-7 md:pb-5 lg:pt-6 lg:px-[60px] lg:pb-10">
                            <h3 className="mb-3 lg:mb-6 text-warning_main font-semibold text-H3 ">reset password</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <div className="mb-5">
                                        <label>
                                            <span className="flex font-semibold mb-3">
                                                Phone Number
                                                <FaStarOfLife size={6} className="text-error_main" />
                                            </span>
                                        </label>
                                        <input type="number" {...register("phone")} placeholder="Enter your phone number" className="p-2 w-full rounded bg-white border border-warning_main text-black text-body2 " />
                                        {/* {errors.phone && <div className=" text-body2 text-error_main mt-1">{errors.phone.message}</div>} */}
                                    </div>
                                    <div className="mb-5">
                                        <label>
                                            <span className="flex font-semibold mb-3">
                                                New Password
                                                <FaStarOfLife size={6} className="text-error_main" />
                                            </span>
                                        </label>
                                        <span className="relative">
                                            <input type={isShowPassword ? "text" : "password"} {...register("new_password")} placeholder="Enter your password" className="p-2 w-full rounded bg-white border border-warning_main text-black text-body2" />
                                            {isShowPassword ? (
                                                <span onClick={() => setIsShowPassword(false)} className="absolute right-2 top-1 hover:cursor-pointer">
                                                    <IoEyeSharp size={16} className="text-warning_main" />
                                                </span>
                                            ) : (
                                                <span onClick={() => setIsShowPassword(true)} className="absolute right-2 top-1 hover:cursor-pointer">
                                                    <IoEyeOff size={16} className="text-warning_main" />
                                                </span>
                                            )}
                                        </span>
                                        {errors.new_password && <div className=" text-body2 text-error_main mt-1">{errors.new_password.message}</div>}
                                    </div>
                                    <div className="mb-5">
                                        <label>
                                            <span className="flex font-semibold mb-3">
                                                Confirm Password
                                                <FaStarOfLife size={6} className="text-error_main" />
                                            </span>
                                        </label>
                                        <span className="relative">
                                            <input type={isShowPassword ? "text" : "password"} {...register("confirm_password")} placeholder="Enter your password" className="p-2 w-full rounded bg-white border border-warning_main text-black text-body2" />
                                            {isShowPassword ? (
                                                <span onClick={() => setIsShowPassword(false)} className="absolute right-2 top-1 hover:cursor-pointer">
                                                    <IoEyeSharp size={16} className="text-warning_main" />
                                                </span>
                                            ) : (
                                                <span onClick={() => setIsShowPassword(true)} className="absolute right-2 top-1 hover:cursor-pointer">
                                                    <IoEyeOff size={16} className="text-warning_main" />
                                                </span>
                                            )}
                                        </span>
                                        {errors.confirm_password && <div className=" text-body2 text-error_main mt-1">{errors.confirm_password.message}</div>}
                                    </div>

                                    <div className="mb-3 lg:mb-6">
                                        <Button type="submit" className={" bg-warning_main w-full hover:bg-warning_dark text-white"}>
                                            Log In
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ResetPassword;
