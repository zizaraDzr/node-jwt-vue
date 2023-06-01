import { IUser } from '@/services/userService/IUser';
export interface IAuthResponse {
	accessToken: string;
	refreshToken: string;
	user: IUser;
}
