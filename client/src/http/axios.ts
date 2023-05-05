import axios, { AxiosInstance } from 'axios';

const API_URL = 'http://localhost:5000/api';

const api: AxiosInstance = axios.create({
	withCredentials: true,
	baseURL: API_URL,
});

export default api;
