import { HTTPError } from '../exeptions/api-error';
import { Request, NextFunction, Response, json } from 'express';

export default function (err: Error | HTTPError, req: Request, res: Response, next: NextFunction) {
	console.log(err);
	if (err instanceof HTTPError) {
		return res.status(err.statusCode).json({ message: err.message, errors: err.errors });
	}
	return res.status(500).send({ err: 'Непредвиденная ошибка' });
}
