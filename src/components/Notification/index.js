import React from "react";
import { MdNotificationsActive } from "react-icons/md";

const Notification = () => {
    return (
        <div className=" flex items-center justify-between bg-white px-2 py-4 rounded">
            <div className=" flex items-center gap-2">
                <span className=" p-2 bg-primary_dark rounded   ">
                    <MdNotificationsActive size={24} className=" text-white" />
                </span>
                <div>
                    <p className=" font-semibold">Welcome to Medisource</p>
                    <p className=" text-secondary">Welcome to Medisource</p>
                </div>
            </div>
            <p className=" text-subtitle2 text-warning_main">6:32 PM</p>
        </div>
    );
};

export default Notification;
