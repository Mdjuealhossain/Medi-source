import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IoCameraReverseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";

import useUpdateProfile from "@/app/hooks/useUpdateProfile";
import Button from "@/components/Button";
import Select from "@/components/Select";
import useModal from "@/app/hooks/useModal";
import useArea from "@/app/hooks/useArea";
import useGetDistrict from "@/app/hooks/useDistrict";
import useMyProfile from "@/app/hooks/useMyProfile";
import { useCart } from "@/app/utilities/cartContex";
import AlartModal from "@/components/ErrorModal";

const ProfileDetails = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const [districtVal, setDistrictVal] = useState({});
    const [message, setMessage] = useState(null);
    const [success, setSuccess] = useState(false);
    const [area, setArea] = useState([]);
    const { updateProfile } = useUpdateProfile();
    const { preview, setPreview } = useCart();
    const { isOpen: isAlart, openModal: openAlart, closeModal: closeAlart } = useModal();

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

    useEffect(() => {
        // Retrieve image from local storage on component mount
        const storedImage = localStorage.getItem("profileImage");
        if (storedImage) {
            setPreview(storedImage);
        }
    }, []);

    const onSubmit = async (formdata) => {
        const updateData = {
            ...formdata,
            ...inputArea,
        };
        const { loading, success, error, responseData } = await updateProfile(updateData);
        setMessage(responseData.message);
        setSuccess(success);
        openAlart();
        setTimeout(() => {
            closeModal();
        }, 2000);

        setArea("");
        setDistrictVal("");
        reset();

        window.location.reload();
    };

    const { data } = useGetDistrict();
    const { data: areaData } = useArea();
    const { data: profileData } = useMyProfile();

    // Upload profile photo and save it to localStorage
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
            // Save the uploaded image as a base64 string in local storage
            const reader = new FileReader();
            reader.onloadend = () => {
                localStorage.setItem("profileImage", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="bg-white md:p-16 p-8 w-full rounded-lg">
                <div className="flex flex-col items-center justify-center gap-2 md:mb-12 mb-6">
                    <div className="relative">
                        <div className="w-24 h-24 relative rounded-full flex items-center justify-center overflow-hidden border-2 border-warning_main">
                            <Image src={preview} height={64} width={64} alt="Avatar" className="h-full w-full" />
                        </div>
                        <button type="button" className="right-0 bottom-0 absolute p-2 bg-warning_main text-white rounded-full flex !z-0">
                            <label htmlFor="file-upload" className="cursor-pointer z-50">
                                <span className="relative">
                                    <IoCameraReverseSharp />
                                </span>
                            </label>
                            <input type="file" id="file-upload" onChange={handleImageChange} accept="image/*" className="hidden" />
                        </button>
                    </div>

                    <h4 className="text-H4 font-semibold text-center">{profileData?.data.name || "Unknown"}</h4>
                </div>
                <div className="max-w-sm mx-auto md:mb-12 mb-6">
                    <div className="flex items-center justify-between pb-2 border-b border-divider">
                        <p>Phone Number</p>
                        <p className="font-medium">{profileData?.data.phone}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 pb-2 border-b border-divider">
                        <p>District</p>
                        <p className="font-medium">{profileData?.data.district.name}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 pb-2 border-b border-divider">
                        <p>Area</p>
                        <p className="font-medium">{profileData?.data.area ? profileData?.data.area.name : profileData?.data.district.name}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 pb-2 border-b border-divider">
                        <p>Address</p>
                        <p className="font-medium">{profileData?.data.address}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Button onClick={openModal} className={"bg-warning_main hover:bg-warning_dark capitalize text-white"}>
                        update profile
                    </Button>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-40">
                    <div className="fixed inset-0 bg-[#0006] dark:bg-white/20" onClick={closeModal}></div>
                    <div className="w-500 md:px-6 md:py-8 py-6 px-4 bg-warning_extra_light z-50 rounded-2xl">
                        <div className="relative mb-6">
                            <h6 className="capitalize text-H6 font-semibold text-center">update profile</h6>
                            <span onClick={closeModal} className="cursor-pointer absolute left-0 top-[40%]">
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
                                <input type="text" {...register("name")} defaultValue={profileData?.data.name} placeholder="Your full name" className="p-2 w-full rounded bg-white ring-warning_main text-black text-body2 focus:ring-1 focus:ring-warning_main focus:outline-none ring-1" />
                            </div>
                            <div className="mb-5">
                                <label>
                                    <span className="flex font-semibold mb-3">
                                        Phone Number
                                        <FaStarOfLife size={6} className="text-error_main" />
                                    </span>
                                </label>
                                <input type="number" {...register("phone")} defaultValue={profileData?.data.phone} placeholder="Enter your phone number" className="p-2 w-full rounded bg-white ring-warning_main text-black text-body2 focus:ring-1 focus:ring-warning_main focus:outline-none ring-1" />
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

                            <div className="text-center">
                                <Button type="submit" className={"bg-warning_main hover:bg-warning_dark capitalize text-white"}>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <AlartModal isOpen={isAlart} openModal={openAlart} closeModal={closeAlart} message={message} success={success} />
        </>
    );
};

export default ProfileDetails;
