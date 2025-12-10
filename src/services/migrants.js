    import { API_BASE_URL, getAuthHeaders, handleResponse } from "./config";

    export async function getAllMigrants() {
    const response = await fetch(`${API_BASE_URL}/migrants`, {
        method: "GET",
        headers: getAuthHeaders(),
    });

    await handleResponse(response);
    return response.json();
    }