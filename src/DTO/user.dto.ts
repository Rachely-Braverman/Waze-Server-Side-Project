import mongoose from "mongoose";

export const userSchema=new mongoose.Schema({
    name:{type: 'string', required: true},
    age:{type: 'number', required: true}
 });

export class UserDTO {
    constructor(
        id: number,
        name: string,
        age: number,
    ) {}
}