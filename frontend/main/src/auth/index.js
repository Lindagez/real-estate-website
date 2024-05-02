// import jwt from 'jsonwebtoken'
import { api, accessTokenKey } from "../config";
import { getToken, removeToken } from "../utils/tokenManager";

export const loginRequest = async (data) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
    try {
        const response = await fetch(`${api}/auth/login`, {
            method: 'POST',
            headers,
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        return error;
    }
};

export const signup = async data => {
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
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


export const Logout = () => {
    removeToken();
    return window.location.href = '/login';
}

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

export const authenticate = (data, next) => {
    if (typeof window != 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data))
        next();
    }
};

export const isAuthenticated = () => {
    const { accessToken, refreshToken } = getToken();
    if (accessToken !== null) {
        return true;
    } else {
        return false;
    }
}
