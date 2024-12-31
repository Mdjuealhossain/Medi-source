import React from "react";

const GradientText = ({ text, className }) => {
    return <span className={`${className} bg-slim-nav bg-clip-text text-transparent bg-200-auto animate-textanim inline-block`}>{text}</span>;
};

export default GradientText;
