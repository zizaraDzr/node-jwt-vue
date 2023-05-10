import http from '@/http/axios';
import { IAuthResponse } from '@/models/response/AuthResponse';
import { AxiosResponse } from 'axios';

export default class AuthService {
	static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
		return http.post<IAuthResponse>('/login', { email, password });
	}

	static async registration(
		email: string,
		password: string,
	): Promise<AxiosResponse<IAuthResponse>> {
		return http.post<IAuthResponse>('/registration', { email, password });
	}

	static async logout(): Promise<void> {
		return http.post('/logout');
	}
}
