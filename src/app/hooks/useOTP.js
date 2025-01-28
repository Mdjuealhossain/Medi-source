import { useApi } from "./useApi";

const useOTP = () => {
    const { apiRequest } = useApi();

    const otpCode = async (userData) => {
        return await apiRequest({
            endpoint: "/otp-send",
            method: "POST",
            data: userData,
        });
    };

    return { otpCode };
};

export default useOTP;
