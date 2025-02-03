import Notification from "@/components/Notification";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Notifications = () => {
    return (
        <div className=" h-full bg-secondary_bg">
            <div className=" bg-white p-4 mb-4">
                <Link href={"/"} className=" cursor-pointer">
                    <HiOutlineArrowLeft size={18} />
                </Link>
            </div>
            <div className=" h-[calc(100vh-50px)] overflow-auto no-scrollbar">
                <div className=" px-4 flex flex-col gap-2 h">
                    <p className=" ">11 May, 2024</p>
                    <div className=" flex flex-col gap-2">
                        <Notification title={"notification.title"} description={"notification.body"} />
                        <Notification title={"notification.title"} description={"notification.body"} />
                    </div>
                </div>
                <div className=" px-4 flex flex-col gap-2">
                    <p className=" ">11 May, 2024</p>
                    <div className=" flex flex-col gap-2">
                        <Notification title={"notification.title"} description={"notification.body"} />
                        <Notification title={"notification.title"} description={"notification.body"} />
                    </div>
                </div>
                <div className=" px-4 flex flex-col gap-2">
                    <p className=" ">11 May, 2024</p>
                    <div className=" flex flex-col gap-2">
                        <Notification title={"notification.title"} description={"notification.body"} />
                        <Notification title={"notification.title"} description={"notification.body"} />
                    </div>
                </div>
                <div className=" px-4 flex flex-col gap-2">
                    <p className=" ">11 May, 2024</p>
                    <div className=" flex flex-col gap-2">
                        <Notification title={"notification.title"} description={"notification.body"} />
                        <Notification title={"notification.title"} description={"notification.body"} />
                        <Notification title={"notification.title"} description={"notification.body"} />
                        <Notification title={"notification.title"} description={"notification.body"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
