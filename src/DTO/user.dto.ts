import * as mongoose from "mongoose";
import { IsEmail, IsEmpty, IsNotEmpty, Length } from 'class-validator';


export enum Erole {
    manager,
    customer
}

export const UserSchema = new mongoose.Schema({

    role: { type: 'string', enum: Erole, required: true, default: Erole.customer }

});

export interface UserDTO {
// @IsNotEmpty()
role: Erole;
}