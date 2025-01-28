// utilities/token.js
export const setToken = (token) => localStorage.setItem("authToken", token);
export const getToken = () => localStorage.getItem("authToken");
export const clearToken = () => localStorage.removeItem("authToken");
