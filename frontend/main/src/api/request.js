import { api } from '../config';
import { isAuthenticated } from '../auth';
import { getToken } from '../utils/tokenManager';

const token = getToken().accessToken;

export const signupRequest = async data => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(`${api}/auth/signup`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const getProperties = async () => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  try {
    const response = await fetch(`${api}/p/list`, {
      method: 'GET',
      headers,
    });
    return await response.json();
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

export const getPropertyById = async id => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  try {
    const response = await fetch(`${api}/p/list/${id}`, {
      method: 'GET',
      headers,
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};
export const getVideoById = async id => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  try {
    const response = await fetch(`${api}/f/get/video/${id}`, {
      method: 'GET',
      headers,
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};
export const getNews = async () => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  try {
    const response = await fetch(`${api}/f/get/news`, {
      method: 'GET',
      headers,
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};
export const getVideos = async () => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  try {
    const response = await fetch(`${api}/f/get/videos`, {
      method: 'GET',
      headers,
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

// user registration

export const registerUser = async (data) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(`${api}/u/register`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    return error;
  }
}

// send request form

export const sendForm = async (data) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  try {
    const response = await fetch(`${api}/sendForm`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    return error;
  }
}

export const sendMessage = async (data) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  try {
    const response = await fetch(`${api}/sendMessage`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    return error;
  }
}