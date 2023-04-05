import { userLoginDto } from '../../dto/user.login.dto';
export interface IUserService {
	registration: (dto: userLoginDto) => Promise<any>;
}