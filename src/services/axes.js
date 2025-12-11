import { API_BASE_URL, getAuthHeaders, handleResponse } from "./config";

export async function getAxes() {
  const res = await fetch(`${API_BASE_URL}/axes`, {
    headers: getAuthHeaders(),
  });
  await handleResponse(res);
  return res.json();
}
