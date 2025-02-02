import React from "react";

const UserSetting = ({ children, title, description }) => {
    return (
        <div className=" bg-white  md:p-16 p-8 w-full rounded-lg">
            <div className=" flex flex-col items-center justify-center gap-2 mb-4 md:mb-6 border-b pb-4 border-divider">
                <h4 className=" text-H4 font-semibold text-center capitalize">{title}</h4>
                {description && <p className=" text-subtitle2 text-secondary">{description}</p>}
            </div>
            <div className=" max-w-sm mx-auto">{children}</div>
        </div>
    );
};

export default UserSetting;
