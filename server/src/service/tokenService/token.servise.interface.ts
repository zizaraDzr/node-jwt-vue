import { JwtPayload } from 'jsonwebtoken';
import { userLoginDto } from '../../dto/user.login.dto';

export interface ITokenService {
	generateTokens: (payload: userLoginDto) => object;
	validateAccessToken: (token: string) => string | JwtPayload | null;
	validateRefreshToken: (token: string) => string | JwtPayload | null;
	saveToken: ({ userId, refreshToken }: {userId: number, refreshToken: string}) => any;
	removeToken: (token: string) => object;
	findToken: (token: string) => object;
}
