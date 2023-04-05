import { userLoginDto } from '../../dto/user.login.dto';
import { modelUser } from '../../models/user-models';
import { compare, hash } from 'bcryptjs';
import { v4 } from 'uuid';
import { IUserService } from './users.service.interface';
import { MailService } from '../mailService/mail.service';

export class UserSerivece implements IUserService {
	async registration({ email, password }: userLoginDto) {
		const candidate = await modelUser.findOne({ email });
		if (candidate) {
			throw new Error(`Пользователь с почтовым адресом ${email} уже существует`);
		}
		const hashPassword = await hash(password, 3);
		const activationLink = v4();
		const user = await modelUser.create({ email, password: hashPassword, activationLink });
        let mailService = new MailService()
        await mailService.sendActivationMail(email, activationLink)
	}
    
}
