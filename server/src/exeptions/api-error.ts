export class HTTPError extends Error {
	statusCode: number;
	context?: string;
	constructor(statusCode: number, message: string, context?: string) {
		super(message);
		this.statusCode = statusCode;
		this.message = message;
		this.context = context;
	}

    static UnauthorizationError() {
        return new HTTPError(401, 'Пользователь не авторизован')
    }

    static BadRequest(message: string) {
        return new HTTPError(400, message)
    }
}