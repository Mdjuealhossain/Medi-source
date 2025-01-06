// hooks/useSignIn.js

import { BASE_URL } from "../utilities/base-url";

const useSignIn = () => {
    const signIn = async (userData) => {
        let loading = true;
        let error = null;
        let success = false;
        let responseData = null;

        try {
            const response = await fetch(`${BASE_URL}/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken") || ""}`,
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error("Failed to register");
            }

            responseData = await response.json();
            success = true;

            if (responseData.token) {
                localStorage.setItem("authToken", responseData.token);
            }
        } catch (err) {
            error = err.message;
        } finally {
            loading = false;
        }

        return { loading, success, error, responseData };
    };

    return { signIn };
};

export default useSignIn;
