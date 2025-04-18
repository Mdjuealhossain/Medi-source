"use client";
import { useState, useEffect } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { validationSchema } from "@/app/staticData/otp";
import useVerifyOTP from "@/app/hooks/useVerifyOTP";
import AlartModal from "@/components/ErrorModal";
import useModal from "@/app/hooks/useModal";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

const VerifyOTPForm = ({ forget }) => {
    const [message, setMessage] = useState(null);
    const [success, setSuccess] = useState(false);
    const { isOpen, openModal, closeModal } = useModal();
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const { verifyPTP } = useVerifyOTP();
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState(null);

    useEffect(() => {
        const storedPhone = localStorage.getItem("phoneNumber");
        if (storedPhone) {
            setPhoneNumber(storedPhone);
        } else {
            setMessage("Phone number not found!");
            openModal();
        }
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (formdata) => {
        if (!phoneNumber) {
            setMessage("Phone number is missing!");
            openModal();
            return;
        }

        const otpValue = otp.join("");
        const payload = { ...formdata, otp: otpValue, phone: phoneNumber }; // Use the phone number from localStorage
        const { loading, success, error, responseData } = await verifyPTP(payload, forget);
        reset();
        setOtp(new Array(6).fill(""));

        if (success && responseData.data.name && responseData.data.phone) {
            localStorage.removeItem("phoneNumber");
            setMessage(responseData.message);
            openModal();
            setSuccess(true);
            setTimeout(() => {
                if (forget) {
                    router.push("/reset-password");
                } else {
                    router.push("/");
                }
            }, 2000);
        } else {
            setMessage(responseData.data.error);
            openModal();
        }
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

            <AlartModal isOpen={isOpen} openModal={openModal} closeModal={closeModal} message={message} success={success} />
        </>
    );
};

export default VerifyOTPForm;
