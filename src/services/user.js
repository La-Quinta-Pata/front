import { API_BASE_URL, handleResponse, getAuthHeaders, getHeaders } from "./config";

export const usersApi = {
    getAll: async () => {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: "GET",
            headers: getAuthHeaders(),
        });

        await handleResponse(response);
        return await response.json();
    },

    getById: async (id) => {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: "GET",
            headers: getAuthHeaders(),
        });

        await handleResponse(response);
        return await response.json();
    },

    getByName: async (name) => {
        const response = await fetch(`${API_BASE_URL}/users/name/${name}`, {
            method: "GET",
            headers: getAuthHeaders(),
        });

        await handleResponse(response);
        return await response.json();
    },

    createAdmin: async (email, password) => {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({ email, password }),
        });

        await handleResponse(response);
        return await response.json();
    },
};