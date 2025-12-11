import { API_BASE_URL, getAuthHeaders, handleResponse } from "./config";


export async function getCountries() {
    const response = await fetch(`${API_BASE_URL}/origins`, {
      headers: getAuthHeaders(),
    });
  
    console.log("STATUS:", response.status);
  
    if (!response.ok) {
      const text = await response.text();
      console.error("ERROR RESPONSE:", text);
      throw new Error("Error loading countries");
    }
  
    return response.json();
  }