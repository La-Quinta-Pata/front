import { AUTH_URL, handleResponse, getHeaders } from "./config";

export const authService = {
    login: async (email, password) => {
        const response = await fetch(`${AUTH_URL}/login`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({ email, password }),
        });

        await handleResponse(response);
        
        const data = await response.json();
        
        if (!data.token) {
            throw new Error("No se recibió token de autenticación");
        }

        return data;
    },

    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    },

    getCurrentUser: () => {
        const userStr = localStorage.getItem("user");
        return userStr ? JSON.parse(userStr) : null;
    },

    isAuthenticated: () => {
        return !!localStorage.getItem("token");
    },

    saveUserData: (token, userData) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
    },
};