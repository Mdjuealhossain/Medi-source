import { useApi } from "./useApi";

const useForgetPassword = () => {
    const { apiRequest } = useApi();

    const forgetPassword = async (userData) => {
        return await apiRequest({
            endpoint: "/otp-send",
            method: "POST",
            data: userData,
        });
    };

    return { forgetPassword };
};

export default useForgetPassword;
