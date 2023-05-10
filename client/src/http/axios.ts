import axios, { AxiosInstance } from 'axios';

const API_URL = 'http://localhost:5000/api';

const api: AxiosInstance = axios.create({
	withCredentials: true,
	baseURL: API_URL,
});

api.interceptors.request.use((config) => {
	config.headers.Authorization = `${localStorage.getItem('token')}`;
	return config;
});

export default api;
