import { useApi } from "./useApi";

const useReset = () => {
    const { apiRequest } = useApi();

    const resetPassword = async (userData) => {
        return await apiRequest({
            endpoint: "/new-password-set",
            method: "POST",
            data: userData,
        });
    };

    return { resetPassword };
};

export default useReset;
