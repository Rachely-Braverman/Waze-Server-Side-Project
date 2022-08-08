import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({

    role: { type: 'string', required: true }
    
});

export interface UserDTO {

    role: string;

}
