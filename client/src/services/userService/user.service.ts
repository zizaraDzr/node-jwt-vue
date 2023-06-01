import http from '@/http/axios';
import { IUserService } from './users.service.interface';
import { AxiosResponse } from 'axios';
import userLoginDto from './user.dto';

class UserService implements IUserService {
	async getAllUsers(): Promise<AxiosResponse<userLoginDto[]>> {
		return http.get<userLoginDto[]>('/users');
	}
}

export default new UserService();
