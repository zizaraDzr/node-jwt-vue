import { sign } from 'jsonwebtoken';
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

	async saveToken({ userId, refreshToken }: {userId: number, refreshToken: string}) {
		const tokenData = await modeltoken.findOne({ user: userId });
		if (tokenData) {
			tokenData.refreshToken = refreshToken;
			return tokenData.save();
		}

		const token = await modeltoken.create({ user: userId, refreshToken });
		return token;
	}
}
