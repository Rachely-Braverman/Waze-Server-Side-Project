import * as mongoose from "mongoose";
// import { Erole } from "./enum";

export enum Erole{
    manager,
    customer
}

export const UserSchema = new mongoose.Schema({

    role: { type: 'string', enum: Erole ,required: true, default:Erole.customer }
    
});

export interface UserDTO {

    role: Erole;
}