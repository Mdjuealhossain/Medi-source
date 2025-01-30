"use client";
import useArea from "@/app/hooks/useArea";
import useGetDistrict from "@/app/hooks/useDistrict";
import useModal from "@/app/hooks/useModal";
import useMyProfile from "@/app/hooks/useMyProfile";
import useUpdateProfile from "@/app/hooks/useUpdateProfile";
import Button from "@/components/Button";
import Select from "@/components/Select";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi";

const ProfileDetails = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const [districtVal, setDistrictVal] = useState({});
    const [area, setArea] = useState([]);
    const { updateProfile } = useUpdateProfile();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const inputArea = {
        district_id: districtVal.id,
        area_id: area.id,
    };

    const onSubmit = async (formdata) => {
        const updateData = {
            ...formdata,
            ...inputArea,
        };
        const { loading, success, error, responseData } = await updateProfile(updateData);
        setArea("");
        setDistrictVal("");
        reset();
        closeModal();
        window.location.reload();
    };

    const { data } = useGetDistrict();
    const { data: areaData } = useArea();
    const { data: profileData } = useMyProfile();

    return (
        <>
            <div className=" bg-white  md:p-16 p-8 w-full rounded-lg">
                <div className=" flex flex-col items-center justify-center gap-2 md:mb-12 mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                        <Image src="/assets/icons/default.png" height={64} width={64} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <h4 className=" text-H4 font-semibold text-center ">{profileData?.data.name}</h4>
                </div>
                <div className=" max-w-sm mx-auto md:mb-12 mb-6">
                    <div className=" flex items-center justify-between pb-2 border-b border-divider">
                        <p>Phone Number</p>
                        <p className=" font-medium">{profileData?.data.phone}</p>
                    </div>
                    <div className=" flex items-center justify-between pt-4 pb-2 border-b border-divider">
                        <p>District</p>
                        <p className=" font-medium">{profileData?.data.district.name}</p>
                    </div>
                    <div className=" flex items-center justify-between pt-4 pb-2 border-b border-divider">
                        <p>Area</p>
                        <p className=" font-medium">{profileData?.data.area ? profileData?.data.area.name : profileData?.data.district.name}</p>
                    </div>
                    <div className=" flex items-center justify-between pt-4 pb-2 border-b border-divider">
                        <p>Address</p>
                        <p className=" font-medium">{profileData?.data.address}</p>
                    </div>
                </div>
                <div className=" flex items-center justify-center">
                    <Button onClick={openModal} className={"bg-warning_main hover:bg-warning_dark capitalize text-white"}>
                        update profile
                    </Button>
                </div>
            </div>
            {isOpen && (
                <div className=" fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-[#0006] dark:bg-white/20" onClick={closeModal}></div>
                    <div className="w-500 md:px-6 md:py-8 py-6 px-4 bg-warning_extra_light z-50 rounded-2xl">
                        <div className=" relative mb-6">
                            <h6 className=" capitalize text-H6 font-semibold text-center ">update profile</h6>
                            <span onClick={closeModal} className=" cursor-pointer absolute left-0 top-[40%]">
                                <HiOutlineArrowLeft size={18} />
                            </span>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-5">
                                <label>
                                    <span className="flex font-semibold mb-3">
                                        Full Name
                                        <FaStarOfLife size={6} className="text-error_main" />
                                    </span>
                                </label>
                                <input
                                    type="text" // Change type to text to allow leading zeros
                                    {...register("name")}
                                    defaultValue={profileData?.data.name}
                                    placeholder="Your full name"
                                    className="p-2 w-full rounded bg-white ring-warning_main text-black text-body2 focus:ring-1 focus:ring-warning_main focus:outline-none ring-1"
                                />
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
                                    defaultValue={profileData?.data.phone}
                                    placeholder="Enter your phone number"
                                    className="p-2 w-full rounded bg-white ring-warning_main text-black text-body2 focus:ring-1 focus:ring-warning_main focus:outline-none ring-1"
                                />
                            </div>
                            <div className="mb-5">
                                <label>
                                    <span className="flex font-semibold mb-3">District</span>
                                </label>
                                <Select defaultValue={profileData?.data.district.name} value={districtVal.name} placeholder={"select district"} multipleValu={false} onChange={setDistrictVal} options={data?.data} inputClass={"p-2 w-full rounded bg-white ring-warning_main text-black text-body2 focus:ring-1 focus:ring-warning_main focus:outline-none ring-1"} />
                            </div>
                            <div className="mb-5">
                                <label>
                                    <span className="flex font-semibold mb-3">Area</span>
                                </label>
                                <Select defaultValue={profileData?.data.area ? profileData?.data.area.name : profileData?.data.district.name} value={area.name} placeholder={"select area"} multipleValu={false} onChange={setArea} options={areaData?.data} inputClass={"p-2 w-full rounded bg-white ring-warning_main text-black text-body2 focus:ring-1 focus:ring-warning_main focus:outline-none ring-1"} />
                            </div>
                            <div className="mb-5">
                                <label>
                                    <span className="flex font-semibold mb-3">Address</span>
                                </label>
                                <input type="text" defaultValue={profileData?.data.address} placeholder="Enter your address number" {...register("address")} className="p-2 w-full rounded bg-white ring-warning_main text-black text-body2 focus:ring-1 focus:ring-warning_main focus:outline-none ring-1" />
                            </div>

                            <div className="mb-3 lg:mb-6">
                                <Button type="submit" className={"bg-warning_main w-full hover:bg-warning_dark capitalize text-white"}>
                                    update
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfileDetails;
