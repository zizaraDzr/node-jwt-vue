import { IUser } from '@/services/userService/IUser';
export interface IAuthResponse {
	accesToken: string;
	refreshToken: string;
	user: IUser;
}
