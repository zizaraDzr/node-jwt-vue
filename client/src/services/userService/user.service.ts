import http from '@/http/axios';
import { IUserService } from './users.service.interface';
import axios, { AxiosResponse } from 'axios';
import userLoginDto from './user.dto';

class UserService implements IUserService {
	async getAllUsers(): Promise<AxiosResponse<userLoginDto[]>> {
		return http.get<userLoginDto[]>('/users');
	}
	async checkAuth(): Promise<any> {
		const response = axios.get<AxiosResponse>(`http://localhost:5000/api/refresh`, {
			withCredentials: true,
		});
		return response;
	}
}

export default new UserService();
