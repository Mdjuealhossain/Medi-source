import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa";
import { IoEyeOff, IoEyeSharp } from "react-icons/io5";

import useUpdatePassword from "@/app/hooks/useUpdatePassword";
import { update_validationSchema } from "@/app/staticData/otp";
import { yupResolver } from "@hookform/resolvers/yup";
import UserSetting from "@/components/UserSetting";
import AlartModal from "@/components/ErrorModal";
import useModal from "@/app/hooks/useModal";
import Button from "@/components/Button";

const UpdatePassword = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConPassword, setIsShowConPassword] = useState(false);
    const [isShowOldPassword, setIsShowOldPassword] = useState(false);
    const [message, setMessage] = useState(null);
    const { isOpen, openModal, closeModal } = useModal();
    const { updatePassword } = useUpdatePassword();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(update_validationSchema),
    });

    const onSubmit = async (formdata) => {
        const { loading, success, error, responseData } = await updatePassword(formdata);
        reset();
        openModal();
        console.log("regvdfgbfb-----", formdata);
        if (success) {
            setMessage(responseData.message);
        } else {
            setMessage(responseData.data.error);
        }
    };
    return (
        <>
            <UserSetting title="change your password" description={"Your new password must be different from previously used password"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <div className="mb-5">
                        <label>
                            <span className="flex font-semibold mb-3">
                                Phone Number
                                <FaStarOfLife size={6} className="text-error_main" />
                            </span>
                        </label>
                        <input type="number" {...register("phone")} placeholder="Enter your phone number" className="p-2 w-full rounded bg-white border border-warning_main text-black text-body2 " />
                        {errors.phone && <div className=" text-body2 text-error_main mt-1">{errors.phone.message}</div>}
                    </div> */}
                    <div className="mb-5">
                        <label>
                            <span className="flex font-semibold mb-3">
                                Old Password
                                <FaStarOfLife size={6} className="text-error_main" />
                            </span>
                        </label>
                        <span className="relative">
                            <input type={isShowOldPassword ? "text" : "password"} {...register("old_password")} placeholder="Enter your password" className="p-2 w-full rounded bg-white border border-warning_main text-black text-body2" />
                            {isShowOldPassword ? (
                                <span onClick={() => setIsShowOldPassword(false)} className="absolute right-2 top-1 hover:cursor-pointer">
                                    <IoEyeSharp size={16} className="text-warning_main" />
                                </span>
                            ) : (
                                <span onClick={() => setIsShowOldPassword(true)} className="absolute right-2 top-1 hover:cursor-pointer">
                                    <IoEyeOff size={16} className="text-warning_main" />
                                </span>
                            )}
                        </span>
                        {errors.old_password && <div className=" text-body2 text-error_main mt-1">{errors.old_password.message}</div>}
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
                            <input type={isShowConPassword ? "text" : "password"} {...register("confirm_password")} placeholder="Enter your password" className="p-2 w-full rounded bg-white border border-warning_main text-black text-body2" />
                            {isShowConPassword ? (
                                <span onClick={() => setIsShowConPassword(false)} className="absolute right-2 top-1 hover:cursor-pointer">
                                    <IoEyeSharp size={16} className="text-warning_main" />
                                </span>
                            ) : (
                                <span onClick={() => setIsShowConPassword(true)} className="absolute right-2 top-1 hover:cursor-pointer">
                                    <IoEyeOff size={16} className="text-warning_main" />
                                </span>
                            )}
                        </span>
                        {errors.confirm_password && <div className=" text-body2 text-error_main mt-1">{errors.confirm_password.message}</div>}
                    </div>

                    {/* <div className="mb-3 lg:mb-6"> */}
                    <Button type="submit" className={" bg-warning_main w-full hover:bg-warning_dark text-white"}>
                        update
                    </Button>
                    {/* </div> */}
                </form>
            </UserSetting>
            <AlartModal isOpen={isOpen} openModal={openModal} closeModal={closeModal} message={message} />
        </>
    );
};

export default UpdatePassword;
