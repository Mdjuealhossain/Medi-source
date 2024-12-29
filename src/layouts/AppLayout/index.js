import Footer from "@/widget/Footer";
import Header from "@/widget/Header";
import React from "react";

const AppLayout = ({ children }) => {
    return (
        <div className=" relative">
            {/* <Header /> */}
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default AppLayout;
