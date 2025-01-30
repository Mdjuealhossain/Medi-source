import { useApi } from "./useApi";

const useOrder = () => {
    const { apiRequest } = useApi();

    const order = async (orderData) => {
        return await apiRequest({
            endpoint: "/order",
            method: "POST",
            data: orderData,
        });
    };

    return { order };
};

export default useOrder;
