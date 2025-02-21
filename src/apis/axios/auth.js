import axios from 'axios';

const token = localStorage.getItem('access');
const AUTH_API_URL = 'https://www.nbcamp-react-auth.link/';

export const authInstance = axios.create({
  baseURL: AUTH_API_URL,
  timeout: 1 * 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
});

authInstance.interceptors.request.use((config) => {
  return config;
});

authInstance.interceptors.response.use((config) => {
  console.log(config);
  return config;
});
