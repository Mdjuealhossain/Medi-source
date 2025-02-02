"use client";
import { useState } from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineLogin } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import Container from "@/components/Container";
import ProfileDetails from "@/widget/ProfileDetails";
import { clearToken } from "@/app/utilities/token";
import { clearUser } from "@/app/utilities/user";
import { useRouter } from "next/navigation";
import UpdatePassword from "@/widget/UpdatePassword";
import PrivacyPolicy from "@/widget/PrivacyPlicy";

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState(options[0].name);

    const route = useRouter();

    const handleLogout = () => {
        clearToken();
        clearUser();
        route.push("/login");
    };

    return (
        <>
            <div className=" mt-12">
                <Container>
                    <div className=" flex xl:gap-20 lg:gap-16 md:gap-12">
                        <div className=" hidden md:block bg-white w-300 py-8 rounded-lg">
                            <div className=" flex flex-col items-center justify-center gap-1 mb-2">
                                <div className="w-16 h-16 rounded-full overflow-hidden">
                                    <Image src="/assets/icons/default.png" height={64} width={64} alt="Avatar" className="w-full h-full object-cover" />
                                </div>
                                <p className=" text-subtitle1 font-semibold text-center ">user name</p>
                            </div>
                            {options.map((item) => (
                                <button key={item.name} onClick={() => setActiveTab(item.name)} className={`${activeTab == item.name && " bg-warning_extra_light text-warning_main"} w-full cursor-pointer capitalize py-3 hover:text-warning_main  px-5 hover:bg-warning_extra_light flex items-center gap-3`}>
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
        </>
    );
};

export default UserProfile;

const options = [
    { name: "profile details", icon: <CgProfile size={20} className=" text-warning_main" />, url: "/profile" },
    { name: "change password", icon: <RiLockPasswordFill size={20} className=" text-warning_main" />, url: "/change-password" },
    { name: "Delete This Account", icon: <FaBagShopping size={20} className=" text-warning_main" />, url: "/order-history" },
    { name: "privacy policy", icon: <FaBagShopping size={20} className=" text-warning_main" />, url: "/order-history" },
    { name: "terms & conditions", icon: <FaBagShopping size={20} className=" text-warning_main" />, url: "/order-history" },
    { name: "refound policy", icon: <FaBagShopping size={20} className=" text-warning_main" />, url: "/order-history" },
    { name: "deletion policy", icon: <FaBagShopping size={20} className=" text-warning_main" />, url: "/order-history" },
];
