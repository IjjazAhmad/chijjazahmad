// Dashboard API base URL (from environment variable, with fallback)
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  "https://my-dashboard-virid.vercel.app/api";

export const API_ENDPOINTS = {
  QUOTE_REQUESTS: `${API_BASE_URL}/quote-requests`,
  SUBSCRIBERS: `${API_BASE_URL}/subscribers`,
};

export default API_BASE_URL;
