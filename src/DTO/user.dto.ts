import * as mongoose from "mongoose";

export enum EnumRole {
    manager,
    customer
}

export const UserSchema = new mongoose.Schema({

    role: { type: 'string', enum: EnumRole, required: true, default: EnumRole.customer }

});

export interface UserDTO {
    role: EnumRole;
}