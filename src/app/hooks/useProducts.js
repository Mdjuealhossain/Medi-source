import { useEffect, useState } from "react";
import { useApi } from "./useApi";

const useProducts = (params = {}) => {
    const { apiRequest } = useApi();
    const [data, setData] = useState(null); // Stores the fetched data
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    const { search, pagination, companyIds, price, discountPrice, discountPercentage, isFlashSale, categoryId } = params;
    const fetchProducts = async () => {
        setLoading(true);
        setError(null);

        // Create query parameters dynamically
        const queryParams = new URLSearchParams();
        // Add parameters only if they have valid values
        if (search) queryParams.append("search", search);
        if (pagination) queryParams.append("pagination", pagination);
        if (companyIds) queryParams.append("company_id", companyIds.join(","));
        if (price) queryParams.append("price", price);
        if (discountPrice) queryParams.append("discount_price", discountPrice);
        if (discountPercentage) queryParams.append("discount_percentage", discountPercentage);
        if (isFlashSale) queryParams.append("is_flash_sale", isFlashSale);
        if (categoryId) queryParams.append("category_id", categoryId);

        const newUrl = `${window.location.pathname}?${queryParams.toString()}`;

        // Update the URL without page reload
        window.history.pushState(null, "", newUrl);

        const {
            success,
            responseData,
            error: fetchError,
        } = await apiRequest({
            endpoint: `/products?${queryParams.toString()}`,
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
