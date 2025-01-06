// hooks/useRegister.js

import { BASE_URL } from "../utilities/base-url";

const useRegister = () => {
    const registation = async (userData) => {
        let loading = true;
        let error = null;
        let success = false;
        let responseData = null;

        try {
            const response = await fetch(`${BASE_URL}/api/register`, {
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
            console.log("Registration successful:", responseData);
        } catch (err) {
            error = err.message;
            console.error("Error during registration:", err.message);
        } finally {
            loading = false;
        }

        // Return the result after the async function has run
        return { loading, success, error, responseData };
    };

    return { registation };
};

export default useRegister;
