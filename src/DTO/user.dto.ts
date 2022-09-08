import * as mongoose from "mongoose";
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';


export enum eRole {
    admin,
    manager,
    customer
}

export const UserSchema = new mongoose.Schema({

    uid: { type: String, required: true},
    role: { type: String, enum:eRole, required: true, default: "customer" },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },

});

export class UserDTO {
    @IsNotEmpty()
    @IsString()
    uid:String;
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