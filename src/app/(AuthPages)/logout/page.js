"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { BsCheck } from "react-icons/bs";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Select from "@/components/Select";
import useRegister from "@/app/hooks/useRegistration ";
import { useGetDistrict } from "@/app/hooks/useDistrict";

const LogOut = () => {
    const [districtVal, setDistrictVal] = useState({});
    const [area, setArea] = useState([]);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [selectedCheckbox, setSelectedCheckbox] = useState(false);
    const { registation } = useRegister();

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        number: Yup.string()
            .matches(/^[0-9]{11}$/, "Phone number must be exactly 10 digits") // ফোন নম্বর ১০ ডিজিট হতে হবে
            .required("Phone number is required"),

        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (formdata) => {
        const finalForm = {
            ...formdata,
            districtVal,
            area,
        };
        const result = await registation(finalForm);
        console.log("data", result.responseData);
        setArea("");
        setDistrictVal("");
        reset();
    };

    const { data, loading, error } = useGetDistrict();

    return (
        <div className=" py-100 flex justify-center items-center">
            <Container className={"!max-w-lg "}>
                <div className=" flex justify-center items-center ">
                    <div className="shadow-sign max-w-sm w-full rounded bg-white">
                        <div className="pt-4 lg:pt-8 relative pb-3 lg:pb-6 border-b border-divider flex items-center justify-center">
                            <Link href={"/"} className=" h-10 flex items-center justify-center">
                                <Image height={40} width={304} alt="logo" src={`/assets/logos/logo.png`} className=" min-w-100 w-auto max-h-full h-10" />
                            </Link>
                            <Link href={"/signin"} className=" absolute left-4 top-1/2">
                                <HiOutlineArrowLeft size={18} />
                            </Link>
                        </div>
                        <div className="pt-2 px-2 pb-2 xs:px-5 md:pt-3 md:px-7 md:pb-5 lg:pt-6 lg:px-[60px] lg:pb-10">
                            <h3 className="mb-3 lg:mb-6 text-warning_main font-semibold text-H3 capitalize">create new account</h3>
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
                                            {...register("number")}
                                            placeholder="Enter your phone number"
                                            className="p-2 w-full rounded bg-white ring-warning_main text-black text-body2 focus:ring-1 focus:ring-warning_main focus:outline-none ring-1"
                                        />
                                        {errors.number && <div className=" text-body2 text-error_main mt-1">{errors.number.message}</div>}
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
                                        <Select value={area} placeholder={"select area"} multipleValu={true} onChange={setArea} options={district} inputClass={"p-2 w-full rounded bg-white ring-warning_main text-black text-body2 focus:ring-1 focus:ring-warning_main focus:outline-none ring-1"} />
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

                                    <div className="flex gap-1 items-center mb-6">
                                        <label className="flex items-center hover:cursor-pointer gap-3 w-fit h-min" onChange={() => setSelectedCheckbox((prev) => !prev)}>
                                            <div className="relative flex items-center">
                                                <input type="checkbox" {...register("isCheck")} className={`rounded h-4 w-4 ${selectedCheckbox == true ? " bg-warning_main text-white" : "bg-white"} border border-warning_main appearance-none`} />
                                                <BsCheck size={16} className="absolute top-0 text-white" />
                                            </div>
                                            <p className=" font-normal">I agree have to the</p>
                                        </label>

                                        <p className="font-semibold text-warning_main">Privacy Policy</p>
                                    </div>
                                    <div className="mb-3 lg:mb-6">
                                        <Button type="submit" className={"bg-warning_main w-full hover:bg-warning_dark capitalize text-white"}>
                                            sign up
                                        </Button>
                                    </div>
                                </div>
                            </form>

                            <div>
                                <p className="mb-5 lg:mb-10 text-center font-normal">
                                    Already have an account
                                    <Link href={"/login"}>
                                        <span className="text-warning_main font-semibold ml-1">Log in</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default LogOut;

export const district = [
    { id: 1, name: "dhaka" },
    { id: 2, name: "barishal" },
    { id: 3, name: "chitagonge" },
    { id: 4, name: "rangpur" },
    { id: 5, name: "khulna" },
    { id: 6, name: "rajshahi" },
    { id: 7, name: "jasor" },
];
