import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    email: { type: String, uninque: true, required: true },
    password: { type: String, required: true },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String }
})

export const modelUser = model("User", userSchema) 