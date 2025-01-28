"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaStarOfLife } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { BsCheck } from "react-icons/bs";

import { validationSchema } from "@/app/staticData/registration";
import useRegister from "@/app/hooks/useRegistration ";
import useArea from "@/app/hooks/useArea";
import useGetDistrict from "@/app/hooks/useDistrict";
import Select from "@/components/Select";
import Button from "@/components/Button";

const RegistationForm = () => {
    const [districtVal, setDistrictVal] = useState({});
    const [area, setArea] = useState([]);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [selectedCheckbox, setSelectedCheckbox] = useState(false);
    const { registation } = useRegister();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const inputArea = {
        district_id: districtVal.id,
        area_id: area.id,
    };

    const onSubmit = async (formdata) => {
        const finalForm = {
            ...formdata,
            ...inputArea,
        };
        const { loading, success, error, responseData } = await registation(finalForm);
        if (responseData.status) {
            router.push("/");
        }
        setArea("");
        setDistrictVal("");
        reset();
    };

    const { data } = useGetDistrict();
    const { data: areaData } = useArea();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="mb-5">
                    <label>
                        <span className="flex font-semibold mb-3">
                            Shop Full Name
                            <FaStarOfLife size={6} className="text-error_main" />
                        </span>
                    </label>
                    <input
                        type="text" // Change type to text to allow leading zeros
                        {...register("name")}
                        placeholder="Your shop full name"
                        className="p-2 w-full rounded bg-white ring-warning_main text-black text-body2 focus:ring-1 focus:ring-warning_main focus:outline-none ring-1"
                    />
                    {errors.name && <div className=" text-body2 text-error_main mt-1">{errors.name.message}</div>}
                </div>
                <div className="mb-5">
                    <label>
                        <span className="flex font-semibold mb-3">
                            Phone Number
                            <FaStarOfLife size={6} className="text-error_main" />
                        </span>
                    </label>
                    <input
                        type="number" // Change type to text to allow leading zeros
                        {...register("phone")}
                        placeholder="Enter your phone number"
                        className="p-2 w-full rounded bg-white ring-warning_main text-black text-body2 focus:ring-1 focus:ring-warning_main focus:outline-none ring-1"
                    />
                    {errors.phone && <div className=" text-body2 text-error_main mt-1">{errors.phone.message}</div>}
                </div>
                <div className="mb-5">
                    <label>
                        <span className="flex font-semibold mb-3">District</span>
                    </label>
                    <Select value={districtVal.name} placeholder={"select district"} multipleValu={false} onChange={setDistrictVal} options={data?.data} inputClass={"p-2 w-full rounded bg-white ring-warning_main text-black text-body2 focus:ring-1 focus:ring-warning_main focus:outline-none ring-1"} />
                </div>
                <div className="mb-5">
                    <label>
                        <span className="flex font-semibold mb-3">Area</span>
                    </label>
                    <Select value={area.name} placeholder={"select area"} multipleValu={false} onChange={setArea} options={areaData?.data} inputClass={"p-2 w-full rounded bg-white ring-warning_main text-black text-body2 focus:ring-1 focus:ring-warning_main focus:outline-none ring-1"} />
                </div>
                <div className="mb-5">
                    <label>
                        <span className="flex font-semibold mb-3">Address</span>
                    </label>
                    <input type="number" placeholder="Enter your address number" {...register("address")} className="p-2 w-full rounded bg-white ring-warning_main text-black text-body2 focus:ring-1 focus:ring-warning_main focus:outline-none ring-1" />
                </div>
                <div className="mb-5">
                    <label>
                        <span className="flex font-semibold mb-3">
                            Password
                            <FaStarOfLife size={6} className="text-error_main" />
                        </span>
                    </label>
                    <span className="relative">
                        <input type={isShowPassword ? "text" : "password"} {...register("password")} placeholder="Enter your password" className="p-2 w-full rounded bg-white ring-warning_main text-black text-body2 focus:ring-1 focus:ring-warning_main focus:outline-none ring-1" />
                        {isShowPassword ? (
                            <span onClick={() => setIsShowPassword(false)} className="absolute right-2 top-[3px] hover:cursor-pointer">
                                <IoEyeSharp size={16} className="text-warning_main" />
                            </span>
                        ) : (
                            <span onClick={() => setIsShowPassword(true)} className="absolute right-2 top-[3px] hover:cursor-pointer">
                                <IoEyeOff size={16} className="text-warning_main" />
                            </span>
                        )}
                    </span>
                    {errors.password && <div className=" text-body2 text-error_main mt-1">{errors.password.message}</div>}
                </div>

                {/* <div className="flex gap-1 items-center mb-6">
                    <label className="flex items-center hover:cursor-pointer gap-3 w-fit h-min" onChange={() => setSelectedCheckbox((prev) => !prev)}>
                        <div className="relative flex items-center">
                            <input type="checkbox" {...register("isCheck")} className={`rounded h-4 w-4 ${selectedCheckbox == true ? " bg-warning_main text-white" : "bg-white"} border border-warning_main appearance-none`} />
                            <BsCheck size={16} className="absolute top-0 text-white" />
                        </div>
                        <p className=" font-normal">I agree have to the</p>
                    </label>

                    <p className="font-semibold text-warning_main">Privacy Policy</p>
                </div> */}
                <div className="mb-3 lg:mb-6">
                    <Button type="submit" className={"bg-warning_main w-full hover:bg-warning_dark capitalize text-white"}>
                        sign up
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default RegistationForm;
