"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
const Drawer = dynamic(() => import("react-modern-drawer"), { ssr: false });
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "react-modern-drawer/dist/index.css";
// import "../../app/(landing)/landing/style.css";

const LandingDrawer = ({ open, onClose, direction }) => {
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
        <Drawer open={open} onClose={onClose} direction={direction} className="md:!w-[582px] !w-full">
            <div className="offCanvas-wrap h-full">
                <div className="offCanvas-toggle" onClick={onClose}>
                    <img src="assets/image/icons/close.png" alt="icon" />
                </div>
                <div className=" flex flex-col justify-between h-full">
                    <div className="offCanvas-content">
                        <h3 className="title">
                            Getting all of the <span>Nutrients</span> you need simply cannot be done without supplements.
                        </h3>
                        <p>Nam libero tempore, cum soluta nobis eligendi cumque quod placeat facere possimus assumenda omnis dolor repellendu sautem temporibus officiis</p>
                    </div>
                    <div className="offcanvas-contact">
                        <h4 className="number">+1 599 162 4545</h4>
                        <h4 className="email">suxnix@gmail.com</h4>
                        <p>
                            5689 Lotaso Terrace, Culver City, <br /> CA, United States
                        </p>
                        <ul className="offcanvas-social list-wrap">
                            <li>
                                <a href="#">
                                    <TiSocialFacebook size={20} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Drawer>
    );
};

export default LandingDrawer;
