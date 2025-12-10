import { API_BASE_URL, getAuthHeaders, handleResponse } from "./config";

export async function getVideosByUser(userId) {
  const response = await fetch(`${API_BASE_URL}/videos/user/${userId}`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  await handleResponse(response);
  return response.json();
}

export async function createVideo(videoData) {
  const response = await fetch(`${API_BASE_URL}/videos`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(videoData),
  });

  await handleResponse(response);
  return response.json();
}

export async function updateVideo(id, videoData) {
  const response = await fetch(`${API_BASE_URL}/videos/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(videoData),
  });

  await handleResponse(response);
  return response.json();
}

export async function deleteVideo(id) {
  const response = await fetch(`${API_BASE_URL}/videos/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  await handleResponse(response);
}