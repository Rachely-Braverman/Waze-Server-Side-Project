import mongoose from "mongoose";
import { UserDTO, UserSchema } from "./user.dto";
// import { IsEmail, IsEmpty, IsNotEmpty, Length } from 'class-validator';
import { ObjectId } from "mongodb";


export const SystemSchema = new mongoose.Schema({

    topic: { type: 'string', required: true },
    objectName: { type: 'string', required: true },
    ownerId: { type: mongoose.Schema.Types.ObjectId, required: true },
    description: { type: 'string', required: false },
    // communicationDetails: { type: '', required: true },
});

export interface SystemDTO {
    // @IsNotEmpty()
    topic: String
    objectName: String
    ownerId: String
    description:String
}