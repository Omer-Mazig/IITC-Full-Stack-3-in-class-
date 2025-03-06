import axios from "axios";

/**
 * This file creates a configured Axios instance for making API requests.
 * It's not used in the mock implementation but can be uncommented in the API files
 * when switching to a real backend.
 */

// Create an Axios instance with base configuration
const api = axios.create({
  // Change this URL to your API endpoint when using a real backend
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add request/response interceptors for global error handling, auth tokens, etc.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
