import { api } from '../config';
export const getProperties = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    try {
      const response = await fetch(`https://api.realestate.addishiwotbusiness.com/p/list`, {
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