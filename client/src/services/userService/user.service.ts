import http from '@/http/axios';
import { IUserService } from './users.service.interface';

class UserService implements IUserService {
	async getAllUsers(): Promise<any> {
		return http.get('/users');
	}
}

export default new UserService();
