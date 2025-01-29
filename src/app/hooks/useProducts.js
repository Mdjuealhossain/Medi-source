import { useEffect, useState } from "react";

import { useApi } from "./useApi";

const useProducts = (params = {}) => {
    const { apiRequest } = useApi();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { search, pagination, price, discountPrice, companyIds, discountPercentage, categoryId, page, isFlashSale } = params;

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);

        let queryParams = "";

        if (search) queryParams += `search=${search}&`;
        if (pagination) queryParams += `pagination=${pagination}&`;
        if (page) queryParams += `page=${page}&`;
        if (companyIds && companyIds.length > 0) {
            queryParams += `company_id=${companyIds}&`;
        }
        if (price) queryParams += `price=${price}&`;
        if (discountPrice) queryParams += `discount_price=${discountPrice}&`;
        if (discountPercentage) queryParams += `discount_percentage=${discountPercentage}&`;
        if (isFlashSale) queryParams += `is_flash_sale=${isFlashSale}&`;
        if (categoryId) queryParams += `category_id=${categoryId}&`;

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
            endpoint: `/products?${queryParams}`,
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
        fetchProducts();
    }, [search, pagination, price, discountPrice, discountPercentage, isFlashSale, categoryId, companyIds, page, isFlashSale]);

    return { data, loading, error };
};

export default useProducts;
