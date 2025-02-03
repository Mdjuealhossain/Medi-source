import { useEffect } from "react";
import dynamic from "next/dynamic";
import { HiOutlineArrowLeft } from "react-icons/hi2";
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });

import Notification from "@/components/Notification";

import "react-modern-drawer/dist/index.css";
import { formatDate } from "@/app/utilities/formatDate ";

const NotificationDrawer = ({ open, onClose, direction, size, notifications }) => {
    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [open]);

    if (!open) return null;

    return (
        <Drawer open={open} onClose={onClose} direction={direction} size={size}>
            <div className="h-full bg-secondary_bg">
                <div className="bg-white p-4 mb-4">
                    <span onClick={onClose} className="cursor-pointer">
                        <HiOutlineArrowLeft size={18} />
                    </span>
                </div>
                <div className="h-[calc(100vh-50px)] overflow-auto no-scrollbar">
                    <div className="px-4 mb-2">
                        {notifications.map((notification, index) => {
                            const { formattedDate, formattedTime } = formatDate(notification.timestamp || Date.now());

                            return <div key={index}>{index === 0 || notifications[index - 1].timestamp !== notification.timestamp ? <p className="text-gray-500">{formattedDate}</p> : null}</div>;
                        })}
                    </div>
                    <div className="px-4 flex flex-col-reverse gap-2">
                        {notifications.map((notification, index) => {
                            const { formattedDate, formattedTime } = formatDate(notification.timestamp || Date.now());

                            return (
                                <div key={index}>
                                    <Notification title={notification.title} description={notification.body} image={notification.image} time={formattedTime} alt="notification" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Drawer>
    );
};

export default NotificationDrawer;
