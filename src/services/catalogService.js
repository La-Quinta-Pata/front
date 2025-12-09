import { API_BASE_URL, handleResponse, getHeaders } from "./config";

export async function getCatalog() {
  try {
    const response = await fetch(`${API_BASE_URL}/videos/catalog`, {
      method: "GET",
      headers: getHeaders(),
    });

    await handleResponse(response);
    return await response.json();
    
  } catch (err) {
    throw new Error(err.message || "Error al cargar el catálogo");
  }
}
