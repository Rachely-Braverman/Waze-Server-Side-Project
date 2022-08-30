import * as mongoose from "mongoose";
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';


export enum status {
    sent, pending, approve, reject
}

export const RequestSchema = new mongoose.Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    system_id: { type: String, required: true },
    display_name: { type: String, required: true },
    status: { type: String, enum: status, required: true },
    notes: { type: String, required: true }
});

export class RequestDTO {
    @IsNotEmpty()
    @IsEnum(status)
    status;
    @IsNotEmpty()
    @IsString()
    firstName: String;
    @IsNotEmpty()
    @IsString()
    lastName: String;
    @IsNotEmpty()
    @IsEmail()
    email: String;
    @IsNotEmpty()
    @IsString()
    @Length(9, 10)
    phone: String;
    @IsNotEmpty()
    @IsString()
    system_id: String;
    @IsNotEmpty()
    @IsString()
    display_name: String;
    @IsNotEmpty()
    @IsString()
    notes: String;
}