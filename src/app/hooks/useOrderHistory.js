"use client";
import { useEffect, useState } from "react";

import { useApi } from "./useApi";

const useOrderHistory = (params = {}) => {
    const { apiRequest } = useApi();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { pagination, search, page } = params;

    const fetchOrderHistory = async () => {
        setLoading(true);
        setError(null);

        let queryParams = "";

        if (pagination) queryParams += `pagination=${pagination}&`;
        if (search) queryParams += `search=${search}&`;
        if (page) queryParams += `page=${page}&`;

        // Remove the trailing '&' if there is one
        queryParams = queryParams.slice(0, -1);

        // Build the full URL with the query parameters
        const newUrl = `${window.location.pathname}?${queryParams}`;

        // Update the URL without page reload
        window.history.pushState(null, "", newUrl);

        // Perform the API request
        const {
            success,
            responseData,
            error: fetchError,
        } = await apiRequest({
            endpoint: `/order-list?${queryParams}`,
            method: "GET",
        });

        if (success) {
            setData(responseData);
        } else {
            setError(fetchError);
        }
        setLoading(false);
    };

    // Trigger fetch when any of these params change
    useEffect(() => {
        fetchOrderHistory();
    }, [search, pagination, page]);

    return { data, loading, error };
};

export default useOrderHistory;
