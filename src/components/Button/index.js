import React from "react";

const Button = ({ children, className, size = "medium" }) => {
    return <button className={`${className} z-10 border border-transparent cursor-pointer rounded-md ${size == "small" ? " px-4 py-1.5" : size == "medium" ? " px-6 py-2" : size == "large" ? " px-6 py-3" : ""}`}>{children}</button>;
};

export default Button;
