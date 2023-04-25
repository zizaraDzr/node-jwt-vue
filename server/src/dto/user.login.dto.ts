export class userLoginDto {
	email: string;
	id?: number;
	isActivated?: boolean;
	password?: string;

	constructor(model: any) {
		this.email = model.email
		this.id = model._id
		this.password = model.password
		this.isActivated = model.isActivated
	}
}
