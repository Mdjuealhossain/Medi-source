import React from "react";

const Container = ({ className, children }) => {
    return <div className={`w-full max-w-xl mx-auto px-4 ${className}`}>{children}</div>;
};

export default Container;
