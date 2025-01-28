import { useEffect, useState } from "react";
import { useApi } from "./useApi";

const useSlider = () => {
    const { apiRequest } = useApi();
    const [data, setData] = useState(null); // Stores the fetched data
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    const fetchSlider = async () => {
        setLoading(true);
        setError(null);

        const {
            success,
            responseData,
            error: fetchError,
        } = await apiRequest({
            endpoint: "/slider-list",
            method: "GET",
        });

        if (success) {
            setData(responseData);
        } else {
            setError(fetchError);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchSlider();
    }, []);

    return { data, loading, error };
};

export default useSlider;
