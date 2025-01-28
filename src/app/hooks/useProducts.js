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
        if (companyIds && companyIds.length > 0) queryParams.append("companyIds", companyIds.join(","));
        if (price) queryParams.append("price", price);
        if (discountPrice) queryParams.append("discountPrice", discountPrice);
        if (discountPercentage) queryParams.append("discountPercentage", discountPercentage);
        if (isFlashSale) queryParams.append("isFlashSale", isFlashSale);
        if (categoryId) queryParams.append("categoryId", categoryId);

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

    useEffect(() => {
        fetchProducts();
    }, []);

    return { data, loading, error };
};

export default useProducts;
