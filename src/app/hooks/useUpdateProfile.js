import { useApi } from "./useApi";

const useUpdateProfile = () => {
    const { apiRequest } = useApi();

    const updateProfile = async (userData) => {
        return await apiRequest({
            endpoint: "/update-profile",
            method: "POST",
            data: userData,
        });
    };

    return { updateProfile };
};

export default useUpdateProfile;
