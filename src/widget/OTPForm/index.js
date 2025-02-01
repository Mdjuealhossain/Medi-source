"use client";
import { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { validationSchema } from "@/app/staticData/otp";
import useVerifyOTP from "@/app/hooks/useVerifyOTP";
import AlartModal from "@/components/ErrorModal";
import { useRouter } from "next/navigation";
import useModal from "@/app/hooks/useModal";
import Button from "@/components/Button";

const OTPForm = () => {
    const [message, setMessage] = useState(null);
    const { isOpen, openModal, closeModal } = useModal();
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const { verifyPTP } = useVerifyOTP();
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
        const otpValue = otp.join("");
        const payload = { ...formdata, otp: otpValue, phone: "01234567890" };
        const { loading, success, error, responseData } = await verifyPTP(payload);
        if (success && responseData.data.name && responseData.data.phone) {
            router.push("/reset-password");
        } else {
            setMessage(responseData.data.error);
            openModal();
        }
        reset();
    };

    const handleChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
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
        <>
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
            <AlartModal isOpen={isOpen} openModal={openModal} closeModal={closeModal} message={message} />
        </>
    );
};

export default OTPForm;
