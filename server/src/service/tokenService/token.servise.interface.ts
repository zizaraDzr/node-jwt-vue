import { userLoginDto } from '../../dto/user.login.dto';

export interface ITokenService {
	generateTokens: (payload: userLoginDto) => object;
	saveToken: ({ userId, refreshToken }: {userId: number, refreshToken: string}) => any;
}
