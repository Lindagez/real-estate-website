import { api } from "../config";

export const login = async (data) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  try {
    const response = await fetch(`${api}/auth/admin/login`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const getUserInfo = async (token) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(
      `${api}/u/dashboard`,
      {
        method: 'GET',
        headers,
      }
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};