import * as mongoose from "mongoose";
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';


export enum eRole {
    admin=0,
    manager=1,
    customer=2,
}

export const UserSchema = new mongoose.Schema({
    role: { type: String, enum:eRole, required: true, default: "customer" },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
});

export class UserDTO {
    @IsNotEmpty()
    @IsEnum(eRole)
    role: eRole;
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