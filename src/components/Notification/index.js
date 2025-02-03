import Image from "next/image";
import React from "react";
import { MdNotificationsActive } from "react-icons/md";

const Notification = ({ image, alt, title, description, time }) => {
    return (
        <div className=" flex items-center justify-between bg-white px-2 py-4 rounded">
            <div className=" flex items-center gap-2">
                {image ? (
                    <Image src={image} alt={alt} height={24} width={24} className=" h-6 w-6 rounded-full" />
                ) : (
                    <span className=" p-2 bg-primary_dark rounded   ">
                        <MdNotificationsActive size={24} className=" text-white" />
                    </span>
                )}
                <div>
                    <p className=" font-semibold">{title}</p>
                    <p className=" text-secondary">{description}</p>
                </div>
            </div>
            <p className=" text-subtitle2 text-warning_main">{time}</p>
        </div>
    );
};

export default Notification;
