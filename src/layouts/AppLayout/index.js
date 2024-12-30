import NavBar from "@/widget/NavBar";
import React from "react";

const AppLayout = ({ children }) => {
    return (
        <div className=" relative">
            <NavBar />
            <div>{children}</div>
        </div>
    );
};

export default AppLayout;
