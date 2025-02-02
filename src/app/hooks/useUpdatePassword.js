import { useApi } from "./useApi";

const useUpdatePassword = () => {
    const { apiRequest } = useApi();

    const updatePassword = async (userData) => {
        return await apiRequest({
            endpoint: "/new-password-create",
            method: "POST",
            data: userData,
        });
    };

    return { updatePassword };
};

export default useUpdatePassword;
