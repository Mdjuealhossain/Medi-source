import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaStarOfLife } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { reset_validationSchema } from "@/app/staticData/otp";
import AlartModal from "@/components/ErrorModal";
import { setUser } from "@/app/utilities/user";
import useReset from "@/app/hooks/useReset";
import useModal from "@/app/hooks/useModal";
import Button from "@/components/Button";

const ResetForm = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConPassword, setIsShowConPassword] = useState(false);
    const [message, setMessage] = useState(null);
    const { isOpen, openModal, closeModal } = useModal();
    const { resetPassword } = useReset();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(reset_validationSchema),
    });

    const onSubmit = async (formdata) => {
        const { loading, success, error, responseData } = await resetPassword(formdata);
        if (success && responseData.data.name && responseData.data.phone) {
            setUser(JSON.stringify(responseData.data));
            router.push("/");
            reset();
        } else {
            setMessage(responseData.data.error);
            openModal();
        }
    };

    return (
        <>
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
                        {errors.phone && <div className=" text-body2 text-error_main mt-1">{errors.phone.message}</div>}
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
                                <span onClick={() => setIsShowPassword(false)} className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:cursor-pointer">
                                    <IoEyeSharp size={16} className="text-warning_main" />
                                </span>
                            ) : (
                                <span onClick={() => setIsShowPassword(true)} className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:cursor-pointer">
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
                            <input type={isShowConPassword ? "text" : "password"} {...register("confirm_password")} placeholder="Enter your password" className="p-2 w-full rounded bg-white border border-warning_main text-black text-body2" />
                            {isShowConPassword ? (
                                <span onClick={() => setIsShowConPassword(false)} className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:cursor-pointer">
                                    <IoEyeSharp size={16} className="text-warning_main" />
                                </span>
                            ) : (
                                <span onClick={() => setIsShowConPassword(true)} className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:cursor-pointer">
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
            <AlartModal isOpen={isOpen} openModal={openModal} closeModal={closeModal} message={message} />
        </>
    );
};

export default ResetForm;
