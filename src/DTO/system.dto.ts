import mongoose from "mongoose";
import { UserDTO, UserSchema } from "./user.dto";

export const SystemSchema = new mongoose.Schema({

    topic: { type: 'string', required: true },
    objectName: { type: 'string', required: true },
    owner: { type: UserSchema, required: true }

});

export interface SystemDTO {

    topic: string
    objectName: string
    owner: UserDTO;

}