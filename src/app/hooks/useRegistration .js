import { useApi } from "./useApi";

const useRegister = () => {
    const { apiRequest } = useApi();

    const registation = async (userData) => {
        return await apiRequest({
            endpoint: "/register",
            method: "POST",
            data: userData,
        });
    };

    return { registation };
};

export default useRegister;
