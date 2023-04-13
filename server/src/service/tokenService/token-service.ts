import { sign, verify, JwtPayload } from 'jsonwebtoken';
import { ConfigService } from '../../config/config.service';
import { modeltoken } from '../../models/token-models';
import { userLoginDto } from '../../dto/user.login.dto';
const configService = new ConfigService();
export class TokenService {
	generateTokens(payload: userLoginDto) {
		const accesToken = sign(payload, configService.get('JWN_ACCESS_SECRET'), { expiresIn: '30m' });
		const refreshToken = sign(payload, configService.get('JWN_REFRESH_SECRET'), {
			expiresIn: '30d',
		});

		return {
			accesToken,
			refreshToken,
		};
	}
	validateAccessToken(token: string): string | JwtPayload | null {
		try {
			const userData = verify(token, configService.get('JWN_ACCESS_SECRET'))
			return userData
		} catch (error) {
			return null
		}
	}
	validateRefreshToken(token: string) {
		try {
			const userData = verify(token, configService.get('JWN_REFRESH_SECRET'))
			return userData
		} catch (error) {
			return null
		}
	}

	async saveToken({ userId, refreshToken }: { userId: any; refreshToken: string }) {
		const tokenData = await modeltoken.findOne({ user: userId });
		if (tokenData) {
			tokenData.refreshToken = refreshToken;
			return tokenData.save();
		}

		const token = await modeltoken.create({ user: userId, refreshToken });
		return token;
	}

	async removeToken(token: string) {
		const tokenData = await modeltoken.deleteOne({ token });
		return tokenData;
	}
	async findToken(token: string) {
		const tokenData = await modeltoken.findOne({ token });
		return tokenData;
	}
}
