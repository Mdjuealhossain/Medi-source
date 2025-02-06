"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineLogin } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { RiListSettingsLine } from "react-icons/ri";
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });

import Container from "@/components/Container";
import ProfileDetails from "@/widget/ProfileDetails";
import { useRouter } from "next/navigation";
import UpdatePassword from "@/widget/UpdatePassword";
import PrivacyPolicy from "@/widget/PrivacyPlicy";
import "react-modern-drawer/dist/index.css";
import useMyProfile from "@/app/hooks/useMyProfile";
import { clearCookie } from "@/app/utilities/cookies";

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState(options[0].name);
    const [isOpen, setIsOpen] = useState(false);
    const { data: profileData } = useMyProfile();

    const route = useRouter();

    // Update the URL without page reload

    const handleLogout = () => {
        clearCookie("authToken");
        route.push("/login");
    };
    const handleTab = (name) => {
        setActiveTab(name);
        route.push(`?tab=${name}`, undefined, { shallow: true });
    };

    return (
        <>
            <div className=" mt-12 relative ">
                <Container>
                    <div className=" relative flex xl:gap-20 lg:gap-16 md:gap-12">
                        <span onClick={() => setIsOpen(true)} className=" bg-white p-2 md:hidden rounded-md absolute -top-11 left-0">
                            <RiListSettingsLine size={20} className=" text-warning_main" />
                        </span>
                        <div className=" hidden md:block bg-white w-300 py-8 rounded-lg">
                            <div className=" flex flex-col items-center justify-center gap-1 mb-6">
                                <div className="w-16 h-16 rounded-full overflow-hidden">
                                    <Image src="/assets/icons/default.png" height={64} width={64} alt="Avatar" className="w-full h-full object-cover" />
                                </div>
                                <p className=" text-subtitle1 font-semibold text-center ">{profileData?.data.name ? profileData?.data.name : "Unknown"}</p>
                            </div>
                            {options.map((item) => (
                                <button key={item.name} onClick={() => handleTab(item.name)} className={`${activeTab == item.name && " bg-warning_extra_light text-warning_main"} w-full cursor-pointer capitalize py-3 hover:text-warning_main  px-5 hover:bg-warning_extra_light flex items-center gap-3`}>
                                    <span>{item.icon}</span>
                                    <p className=" font-medium  capitalize">{item.name}</p>
                                </button>
                            ))}

                            <button onClick={handleLogout} className="cursor-pointer py-3 w-full  px-5 hover:bg-warning_extra_light flex items-center gap-3 capitalize">
                                <MdOutlineLogin size={20} className=" text-warning_main rotate-180" />
                                <p className=" font-medium  capitalize">log out</p>
                            </button>
                        </div>

                        <div className=" md:w-profile w-full">
                            {activeTab == "profile details" && <ProfileDetails />}
                            {activeTab == "change password" && <UpdatePassword />}
                            {activeTab == "privacy policy" && <PrivacyPolicy />}
                        </div>
                    </div>
                </Container>
            </div>
            <Drawer open={isOpen} onClose={() => setIsOpen(false)} direction={"left"} className="!w-full relative">
                <div className=" relative bg-white py-8 mt-12 rounded-lg">
                    <div className=" flex flex-col items-center justify-center gap-1 mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                            <Image src="/assets/icons/default.png" height={64} width={64} alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <p className=" text-subtitle1 font-semibold text-center ">{profileData?.data.name ? profileData?.data.name : "Unknown"}</p>
                    </div>
                    {options.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => {
                                handleTab(item.name);
                                setIsOpen(false);
                            }}
                            className={`${activeTab == item.name && " bg-warning_extra_light text-warning_main"} w-full cursor-pointer capitalize py-3 hover:text-warning_main  px-5 hover:bg-warning_extra_light flex items-center gap-3`}
                        >
                            <span>{item.icon}</span>
                            <p className=" font-medium  capitalize">{item.name}</p>
                        </button>
                    ))}

                    <button
                        onClick={() => {
                            handleLogout();
                        }}
                        className="cursor-pointer py-3 w-full  px-5 hover:bg-warning_extra_light flex items-center gap-3 capitalize"
                    >
                        <MdOutlineLogin size={20} className=" text-warning_main rotate-180" />
                        <p className=" font-medium  capitalize">log out</p>
                    </button>
                </div>
                <span onClick={() => setIsOpen(false)} className=" cursor-pointer shadow-4xl p-1.5 rounded-full bg-warning_main text-white absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <IoMdClose size={20} />
                </span>
            </Drawer>
        </>
    );
};

export default UserProfile;

const options = [
    { name: "profile details", icon: <CgProfile className=" text-warning_main text-subtitle1" />, url: "/profile" },
    { name: "change password", icon: <RiLockPasswordFill className=" text-warning_main text-subtitle1" />, url: "/change-password" },
    { name: "Delete This Account", icon: <FaBagShopping className=" text-warning_main text-subtitle1" />, url: "/order-history" },
    { name: "privacy policy", icon: <FaBagShopping className=" text-warning_main text-subtitle1" />, url: "/order-history" },
    { name: "terms & conditions", icon: <FaBagShopping className=" text-warning_main text-subtitle1" />, url: "/order-history" },
    { name: "refound policy", icon: <FaBagShopping className=" text-warning_main text-subtitle1" />, url: "/order-history" },
    { name: "deletion policy", icon: <FaBagShopping className=" text-warning_main text-subtitle1" />, url: "/order-history" },
];
