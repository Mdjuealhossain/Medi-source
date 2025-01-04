import { useEffect } from "react";
import dynamic from "next/dynamic";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });
import Notification from "@/components/Notification";
import "react-modern-drawer/dist/index.css";

const NotificationDrawer = ({ open, onClose, direction, size }) => {
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
            <div className=" h-full bg-secondary_bg">
                <div className=" bg-white p-4 mb-4">
                    <span onClick={onClose} className=" cursor-pointer">
                        <HiOutlineArrowLeft size={18} />
                    </span>
                </div>
                <div className=" h-[calc(100vh-50px)] overflow-auto no-scrollbar">
                    <div className=" px-4 flex flex-col gap-2 h">
                        <p className=" ">11 May, 2024</p>
                        <div className=" flex flex-col gap-2">
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                        </div>
                    </div>
                    <div className=" px-4 flex flex-col gap-2">
                        <p className=" ">11 May, 2024</p>
                        <div className=" flex flex-col gap-2">
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                        </div>
                    </div>
                    <div className=" px-4 flex flex-col gap-2">
                        <p className=" ">11 May, 2024</p>
                        <div className=" flex flex-col gap-2">
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                        </div>
                    </div>
                    <div className=" px-4 flex flex-col gap-2">
                        <p className=" ">11 May, 2024</p>
                        <div className=" flex flex-col gap-2">
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    );
};

export default NotificationDrawer;
