import { useApi } from "./useApi";

const useVerifyOTP = () => {
    const { apiRequest } = useApi();

    const verifyPTP = async (userData) => {
        return await apiRequest({
            endpoint: "/verify-otp",
            method: "POST",
            data: userData,
        });
    };

    return { verifyPTP };
};

export default useVerifyOTP;
