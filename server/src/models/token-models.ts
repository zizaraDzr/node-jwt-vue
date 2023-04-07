import { Schema, model } from 'mongoose';

const tokenSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	refreshToken: { type: String, required: true },
});

export const modeltoken = model('token', tokenSchema);
