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

export async function updateVideo(videoId, data) {
  const response = await fetch(
    `${API_BASE_URL}/videos/${videoId}`,
    {
      method: "PUT",
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    const errorJson = await response.json();
    throw errorJson;
  }

  return response.json();
}

export async function deleteVideo(id) {
  const res = await fetch(`${API_BASE_URL}/videos/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeaders(),
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    let errText = await res.text();
    throw new Error(errText || `Request failed with status ${res.status}`);
  }

  if (res.status === 204) return null;

  const text = await res.text();
  if (!text) return null;
  return JSON.parse(text);
}