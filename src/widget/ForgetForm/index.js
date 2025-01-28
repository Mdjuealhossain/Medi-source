"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaStarOfLife } from "react-icons/fa";

import { validationSchema } from "@/app/staticData/forget-password";
import useForgetPassword from "@/app/hooks/useForgetPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button";

const ForgetForm = () => {
    const { forgetPassword } = useForgetPassword();
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
        const { loading, success, error, responseData } = await forgetPassword(formdata);
        if (success) {
            router.push("/otp");
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="mb-5">
                    <label>
                        <span className="flex font-semibold mb-3">
                            Phone Number
                            <FaStarOfLife size={6} className="text-error_main" />
                        </span>
                    </label>
                    <input type="number" {...register("phone")} placeholder="Enter your phone number" className="p-2 w-full rounded bg-white border border-divider text-black text-body2 " />
                    {errors.phone && <div className=" text-body2 text-error_main mt-1">{errors.phone.message}</div>}
                </div>
                <div className="mb-3 lg:mb-6">
                    <Button type="submit" className={"bg-warning_main w-full hover:bg-warning_dark text-white capitalize"}>
                        Send code
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default ForgetForm;
