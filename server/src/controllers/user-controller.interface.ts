import { NextFunction, Request, Response } from 'express';

export interface IUserController {
	registration: (req: Request, res: Response, next: NextFunction) => void;
	login: (req: Request, res: Response, next: NextFunction) => void;
	logout: (req: Request, res: Response, next: NextFunction) => void;
	getRefresh: (req: Request, res: Response, next: NextFunction) => void;
	getUsers: (req: Request, res: Response, next: NextFunction) => void;
}