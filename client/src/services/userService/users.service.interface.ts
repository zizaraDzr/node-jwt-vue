export interface IUserService {
	// registration: (dto: any) => Promise<any>;
	// login: (dto: any) => Promise<any>;
	// logout: (refreshToken: string) => Promise<any>;
	getAllUsers: () => Promise<any>;
	checkAuth: () => Promise<any>;
}
