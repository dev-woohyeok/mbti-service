import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const mbtiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1 * 1000,
  headers: {
    'Content-Type': 'application/json'
  }
});
