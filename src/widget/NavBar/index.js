import React from "react";
import SlimNavbarForTopArea from "./SlimNavbarForTopArea";
import PcNav from "./PcNav";

const NavBar = () => {
    return (
        <div>
            {/* for pc start*/}
            <div className="large-screen">
                <SlimNavbarForTopArea />
                <PcNav />
            </div>
            {/* for pc end*/}
        </div>
    );
};

export default NavBar;
