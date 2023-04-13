import { NextFunction, Request, Response } from 'express';
import { IUserController } from './user-controller.interface';
import { UserSerivece } from '../service/userService/user.service';
import { userLoginDto } from '../dto/user.login.dto';
import { validationResult } from 'express-validator';
import { HTTPError } from '../exeptions/api-error';

const userSerivece = new UserSerivece();
export default class UserController implements IUserController {
	async registration(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return next(HTTPError.BadRequest('Ошибка при валидации', errors.array()));
			}
			const { email, password } = req.body;
			console.log(email);
			const userData = await userSerivece.registration({ email, password });
			let day30 = 30 * 24 * 60 * 60 * 1000;
			res.cookie('refreshToken', userData.refreshToken, { maxAge: day30, httpOnly: true });
			return res.json(userData);
		} catch (error) {
			next(error);
		}
	}
	async login(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const { email, password } = req.body;
			const userData = await userSerivece.login({ email, password });
			let day30 = 30 * 24 * 60 * 60 * 1000;

			res.cookie('refreshToken', userData.refreshToken, { maxAge: day30, httpOnly: true });
			return res.json(userData);
		} catch (error) {
			next(error);
		}
	}
	async logout(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const { refreshToken } = req.cookies;
			const token = await userSerivece.logout(refreshToken);
			res.clearCookie('refreshToken')
			return res.json(token)
		} catch (error) {
			next(error);
		}
	}
	async activate(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
		} catch (error) {}
	}
	async getRefresh(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
		} catch (error) {}
	}
	async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
		console.log(4444);
		try {
			res.json(['123', '456']);
		} catch (error) {}
	}
}

// export const userController = new UserController()
