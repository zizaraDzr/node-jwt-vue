import { NextFunction, Request, Response } from 'express';
import { IUserController } from './user-controller.interface';
import { UserSerivece } from '../service/userService/user.service';
import { userLoginDto } from '../dto/user.login.dto';
const userSerivece = new UserSerivece();
export default class UserController implements IUserController {
	async registration(req: Request, res: Response, next: NextFunction): Promise<any> {
		console.log(424424244)

		try {
			const { email, password } = req.body;
			console.log(email)
			const userData = await userSerivece.registration({ email, password });
			let day30 = 30 * 24 * 60 * 60 * 1000;
			res.cookie('refreshToken', userData.refreshToken, { maxAge: day30, httpOnly: true });
			return res.json(userData);
		} catch (error) {
			console.log(error);
		}
	}
	async login(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
		} catch (error) {}
	}
	async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
		} catch (error) {}
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
