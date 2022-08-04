import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: { type: 'string', required: true },
    age: { type: 'number', required: true }
});

export interface UserDTO {

    id: number;
    name: string;
    age: number;

}