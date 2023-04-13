import { userLoginDto } from '../../dto/user.login.dto';
import { modelUser } from '../../models/user-models';
import { compare, hash } from 'bcryptjs';
import { v4 } from 'uuid';
import { IUserService } from './users.service.interface';
import { MailService } from '../mailService/mail.service';
import { TokenService } from '../tokenService/token-service';
import { HTTPError } from '../../exeptions/api-error';


const tokenService = new TokenService();
export class UserSerivece implements IUserService {
	async registration({ email, password }: any) {
		const candidate = await modelUser.findOne({ email });
		if (candidate) {
			throw HTTPError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
		}
		const hashPassword = await hash(password as string, 3);
		const activationLink = v4();
		const user = await modelUser.create({ email, password: hashPassword, activationLink });
		// let mailService = new MailService();
		// await mailService.sendActivationMail(email, activationLink);
		const tokens = tokenService.generateTokens({
			id: user.id,
			email: user.email,
			isActivated: user.isActivated,
		});
		await tokenService.saveToken({ userId: user.id, refreshToken: tokens.refreshToken });

		return {
			...tokens,
			user,
		};
	}

	async login({ email, password }: any) {
		const user = await modelUser.findOne({ email });
		console.log(user)
		if (!user) {
			throw HTTPError.BadRequest(`Неверный email ${email}`);
		}
		const isPassEquals:boolean = await compare(password, user.password)
		if (!isPassEquals) {
			throw HTTPError.BadRequest(`не корректный пароль`);
		}
		const tokens = tokenService.generateTokens({
			id: user.id,
			email: user.email,
			isActivated: user.isActivated,
		});
		await tokenService.saveToken({ userId: user.id, refreshToken: tokens.refreshToken });
		return {
			...tokens,
			user,
		};
	}

	async logout(refreshToken: string): Promise<any> {
		const token = await tokenService.removeToken(refreshToken)
		return token
	}
}
