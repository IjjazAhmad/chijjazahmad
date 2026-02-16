// Dashboard API base URL (from environment variable)
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const API_ENDPOINTS = {
  QUOTE_REQUESTS: `${API_BASE_URL}/quote-requests`,
  SUBSCRIBERS: `${API_BASE_URL}/subscribers`,
  APPOINTMENTS: `${API_BASE_URL}/appointments`,
};

export default API_BASE_URL;
