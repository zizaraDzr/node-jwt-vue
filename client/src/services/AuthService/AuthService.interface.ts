import { AxiosResponse } from 'axios';
import { IAuthResponse } from '@/services/AuthService/AuthResponse';

export interface IAuthService {
	login: (email: string, password: string) => Promise<AxiosResponse<IAuthResponse>>;
	registration: (email: string, password: string) => Promise<AxiosResponse<IAuthResponse>>;
	logout: () => Promise<void>;
}
