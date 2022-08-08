import mongoose from "mongoose";
import { UserDTO, UserSchema } from "./user.dto";
import { IsEmail, IsEmpty, IsNotEmpty, Length } from 'class-validator';
import { ObjectId } from "mongodb";


export const SystemSchema = new mongoose.Schema({

    topic: { type: 'string', required: true },
    objectName: { type: 'string', required: true },
    owner: { type: 'string', ref:'UserSchema', required: true },
    description: { type: 'string', required: false },
    communicationDetails: { type: '', required: true },
});

export interface SystemDTO {
    // @IsNotEmpty()
    // @Length(3)
    topic: String
    // @IsNotEmpty()
    // @Length(3)
    objectName: String
    // @IsNotEmpty()
    owner: String
    description:String
}