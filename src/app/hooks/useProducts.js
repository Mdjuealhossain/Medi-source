import { useEffect, useState } from "react";
import { useApi } from "./useApi";

const useProducts = (params = {}) => {
    const { apiRequest } = useApi();
    const [data, setData] = useState(null); // Stores the fetched data
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    const { search, pagination, price, discountPrice, companyIds, discountPercentage, isFlashSale, categoryId } = params;
    // const companyIds = [1, 3];

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);

        // Create query parameters manually
        let queryParams = ""; // Initialize queryParams as an empty string

        // Add parameters to the query string if they have valid values
        if (search) queryParams += `search=${search}&`;
        if (pagination) queryParams += `pagination=${pagination}&`;
        if (companyIds && companyIds.length > 0) {
            queryParams += `company_id=${companyIds}&`; // Manually append company_id with square brackets
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
    }, [search, pagination, price, discountPrice, discountPercentage, isFlashSale, categoryId, companyIds]);

    return { data, loading, error };
};

export default useProducts;
