import { NextFunction, Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { IUserController } from './user-controller.interface';
class UserController implements IUserController {
    async registration(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

        } catch (error) {

        }
    }
    async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

        } catch (error) {

        }
    }
    async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

        } catch (error) {

        }
    }
    async activate(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

        } catch (error) {

        }
    }
    async getRefresh(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

        } catch (error) {

        }
    }
    async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.log(4444)
        try {
            res.json(['123', '456'])
        } catch (error) {

        }
    }
}

export const userController = new UserController()