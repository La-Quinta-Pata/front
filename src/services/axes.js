    import { API_BASE_URL, getAuthHeaders, handleResponse } from "./config";

    export async function getAllAxes() {
    const response = await fetch(`${API_BASE_URL}/axes`, {
        method: "GET",
        headers: getAuthHeaders(),
    });

    await handleResponse(response);
    return response.json();
    }