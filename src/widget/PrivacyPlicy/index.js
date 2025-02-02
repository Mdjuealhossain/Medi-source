import usePrivacy from "@/app/hooks/usePrivacy";
import UserSetting from "@/components/UserSetting";
import React from "react";

const PrivacyPolicy = () => {
    const { data } = usePrivacy();

    return (
        <UserSetting title={data?.data.title}>
            <div dangerouslySetInnerHTML={{ __html: data?.data.description }}></div>
        </UserSetting>
    );
};

export default PrivacyPolicy;
