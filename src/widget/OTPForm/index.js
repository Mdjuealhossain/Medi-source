"use client";
import { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@/components/Button";
import useOTP from "@/app/hooks/useOTP";
import { useRouter } from "next/navigation";
import { validationSchema } from "@/app/staticData/otp";

const OTPForm = () => {
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
        const { loading, success, error, responseData } = await otpCode(formdata);
        if (success) {
            router.push("/reset-password");
        }
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
    );
};

export default OTPForm;
