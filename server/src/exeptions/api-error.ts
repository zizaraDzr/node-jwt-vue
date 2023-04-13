export class HTTPError extends Error {
	statusCode: number;
	errors: object[];
	constructor(statusCode: number, message: string, errors: object[] = []) {
		super(message);
		this.statusCode = statusCode;
		this.errors = errors;
	}

    static UnauthorizationError() {
        return new HTTPError(401, 'Пользователь не авторизован')
    }

    static BadRequest(message: string, errors?: object[]) {
        return new HTTPError(400, message, errors)
    }
}