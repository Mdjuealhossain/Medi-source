// utilities/token.js
export const setUser = (data) => localStorage.setItem("user", data);
export const getUser = () => localStorage.getItem("user");
export const clearUser = () => localStorage.removeItem("user");
