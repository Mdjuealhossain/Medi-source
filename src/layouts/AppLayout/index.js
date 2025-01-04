import PcNav from "@/widget/NavBar/PcNav";
import SlimNavbarForTopArea from "@/widget/NavBar/SlimNavbarForTopArea";
import React from "react";

const AppLayout = ({ children }) => {
    return (
        <div className=" relative">
            <SlimNavbarForTopArea />
            <PcNav />
            <div>{children}</div>
        </div>
    );
};

export default AppLayout;
