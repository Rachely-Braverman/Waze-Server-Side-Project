import * as mongoose from "mongoose";
import { isBoolean, IsEnum, IsNotEmpty, IsString } from 'class-validator';


export enum eRole {
    admin,
    manager,
}

export const ManagerSchema = new mongoose.Schema({

    user_id: { type: String, required: true },
    system_id: { type: String, required: true },
    active: { type: Boolean, required: true },
    display_name: { type: String, required: true },
    role: { type: String, enum: eRole, required: true },
    invitation_sent: { type: String, required: true }

});

export class ManagerDTO {
    @IsNotEmpty()
    @IsEnum(eRole)
    role: eRole;
    @IsNotEmpty()
    @IsString()
    user_id: String;
    @IsNotEmpty()
    @IsString()
    system_id: String;
    @IsNotEmpty()
    // @isBoolean()
    active: Boolean;
    @IsNotEmpty()
    @IsString()
    display_name: String;
    @IsNotEmpty()
    @IsString()
    invitation_sent
}
