import { mbtiInstance } from './axios/mbti.mjs';

export const getTodos = async () => {
  const response = await mbtiInstance.get('/todos');
  console.log(`🚀 - auth.js:5 - register - response:`, response);
  return response.data;
};

// export const login = async (userData) => {};

// export const getUserProfile = async (token) => {};

// export const updateProfile = async (formData) => {};
