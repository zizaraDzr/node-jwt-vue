import { JwtPayload } from 'jsonwebtoken';
import TokenService from './../service/tokenService/token-service';
import { HTTPError } from './../exeptions/api-error';
import { Request, NextFunction, Response } from 'express';

export interface CustomRequest extends Request {
    user: string | JwtPayload | null;
  }
export function authMiddleware (req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(HTTPError.UnauthorizationError())
        }

        const userData = TokenService.validateAccessToken(authorizationHeader)
        if (!userData) {
            return next(HTTPError.UnauthorizationError());
        }

        // req.user = userData
        next()
    } catch (error) {
        return next(HTTPError.UnauthorizationError());
    }
}