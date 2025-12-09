import { API_BASE_URL, getAuthHeaders, handleResponse } from "./config";

export async function getVideosByUser(userId) {
  const response = await fetch(
    `${API_BASE_URL}/videos/user/${userId}`,
    {
      method: "GET",
      headers: getAuthHeaders(),
    }
  );

  await handleResponse(response);
  return response.json();
}