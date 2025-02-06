"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaStarOfLife } from "react-icons/fa";

import { validationSchema } from "@/app/staticData/forget-password";
import useForgetPassword from "@/app/hooks/useForgetPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button";
import useModal from "@/app/hooks/useModal";
import AlartModal from "@/components/ErrorModal";

const ForgetForm = () => {
    const { forgetPassword } = useForgetPassword();
    const [message, setMessage] = useState(null);
    const { isOpen, openModal, closeModal } = useModal();
    const [success, setSuccess] = useState(false);
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
        if (responseData.data.otp && responseData.data.phone) {
            localStorage.setItem("phoneNumber", formdata.phone);
            setMessage(responseData.message);
            setSuccess(true);
            openModal();
            setTimeout(() => {
                router.push("/otp");
            }, 2000);
        } else {
            setMessage(responseData.data.error || "Invalid phone number");
            openModal();
        }
        reset();
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
            <AlartModal isOpen={isOpen} openModal={openModal} closeModal={closeModal} message={message} success={success} />
        </>
    );
};

export default ForgetForm;
