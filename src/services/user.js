import { API_BASE_URL, handleResponse, getAuthHeaders } from "./config";

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

    create: async (userData) => {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify(userData),
        });

        await handleResponse(response);
        return await response.json();
    },

    update: async (id, userData) => {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: "PUT",
            headers: getAuthHeaders(),
            body: JSON.stringify(userData),
        });

        await handleResponse(response);
        return await response.json();
    },

    remove: async (id) => {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: "DELETE",
            headers: getAuthHeaders(),
        });

        await handleResponse(response);
    },
};