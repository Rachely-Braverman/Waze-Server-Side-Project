import * as mongoose from "mongoose";
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';


export enum Erole {
    admin,
    manager,
    customer
}

export const UserSchema = new mongoose.Schema({

    role: { type: String, enum: Erole, required: true, default: "customer" },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },

});

export class UserDTO {
    @IsNotEmpty()
    @IsEnum(Erole)
    role: Erole;
    @IsNotEmpty()
    @IsString()
    firstName:String;
    @IsNotEmpty()
    @IsString()
    lastName:String;
    @IsNotEmpty()
    @IsEmail()
    email:String;
    @IsNotEmpty()
    @IsString()
    @Length(9, 10)
    phone:String;
}