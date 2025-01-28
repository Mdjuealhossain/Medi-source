// hooks/useApi.js

import { BASE_URL } from "../utilities/base-url";
import { getToken, setToken } from "../utilities/token";

export const useApi = () => {
    const apiRequest = async ({ endpoint, method = "GET", data = null, auth = true }) => {
        let loading = true;
        let error = null;
        let success = false;
        let responseData = null;

        try {
            const headers = {
                "Content-Type": "application/json",
            };

            // Add Authorization header if `auth` is true
            if (auth) {
                const token = getToken();
                if (token) {
                    headers.Authorization = `Bearer ${token}`;
                }
            }
            // Prepare fetch options
            const options = {
                method,
                headers,
            };

            if (data) {
                options.body = JSON.stringify(data);
            }

            // Fetch from API
            const response = await fetch(`${BASE_URL}${endpoint}`, options);

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || "Something went wrong");
            }

            // Parse response
            responseData = await response.json();
            success = true;

            // If token is returned from API (e.g., login), save it in localStorage
            if (method === "POST" && responseData.data.token) {
                setToken(responseData.data.token);
            }
        } catch (err) {
            error = err.message;
        } finally {
            loading = false;
        }

        return { loading, success, error, responseData };
    };

    return { apiRequest };
};
