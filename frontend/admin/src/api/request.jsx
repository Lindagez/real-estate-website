import { api } from '../config';
import { getToken } from '../utils/tokenManager';

const token = getToken().accessToken;

export const getCustomers = async (findBy, value) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(
      `${api}/a/get/users?findBy=${findBy}&value=${value}`,
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

export const updateCustomer = async data => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(`${api}/u/update`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const deleteCustomer = async id => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(`${api}/u/delete`, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(id),
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const addCustomer = async data => {
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

// properties request

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
    return error;
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

export const updateProperty = async data => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(`${api}/a/update/property`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const addProperty = async data => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(`${api}/a/add/property`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const deleteProperty = async id => {
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(`${api}/a/delete/property/${id}`, {
      method: 'DELETE',
      headers,
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const restoreProperty = async id => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(`${api}/a/restore/property/${id}`, {
      method: 'PATCH',
      headers,
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const addPropertyImage = async (formData) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(
      `${api}/a/add/property/image/?width=1080&height=720`,
      {
        method: 'POST',
        headers,
        body: formData,
      }
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const deletePropertyImage = async id => {
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(
      `${api}/a/delete/property/image/${id}`,
      {
        method: 'DELETE',
        headers,
      }
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};

// news request

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

export const getNewsById = async id => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  try {
    const response = await fetch(`${api}/f/get/news/${id}`, {
      method: 'GET',
      headers,
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const updateNews = async data => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(`${api}/a/update/news`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const addNews = async data => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(`${api}/a/add/news`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const deleteNews = async id => {
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(`${api}/a/delete/news/${id}`, {
      method: 'DELETE',
      headers,
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const addNewsImage = async (newsId, formData) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(
      `${api}/a/news/image/add/${newsId}?width=1080&height=720`,
      {
        method: 'POST',
        headers,
        body: formData,
      }
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};

// video request

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

export const updateVideo = async data => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(`${api}/a/update/video`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const addVideo = async data => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(`${api}/a/add/video`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const deleteVideo = async id => {
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await fetch(`${api}/a/delete/video/${id}`, {
      method: 'DELETE',
      headers,
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};
