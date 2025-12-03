export const API_URL = "http://localhost:8080";
export const AUTH_URL = "http://localhost:8080/api/auth";
export const API_BASE_URL = "http://localhost:8080/api";

export const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `Error ${response.status}`);
  }
  return response;
};

export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": "application/json",
  };
};

export const getHeaders = () => {
  return {
    "Content-Type": "application/json",
  };
};
