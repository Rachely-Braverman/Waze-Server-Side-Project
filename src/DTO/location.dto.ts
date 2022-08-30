import { IsEmail, IsNotEmpty, IsNumber, IsString, Length } from "class-validator";
import mongoose from "mongoose";

export const LocationSchema = new mongoose.Schema({
    
    // if null its admin location
    manager_id:{ type: String, required: true },
    system_id: { type: String, required: true },
    // geolocation
    location:{ type: String, required: true},
    lat:{ type: Number, required: true},
    len:{ type: Number, required: true},
    description:{ type: String, required: true },
    name:{ type: String, required: true },
    notes:{ type: String, required: true },
    // (mail & phone) - if different then user details
    communication_details:{ type: String, required: true }, 
});

export class LocationDTO {
    @IsString()
    @IsNotEmpty()
    manager_id
    @IsString()
    @IsNotEmpty()
    system_id
    @IsString()
    @IsNotEmpty()
    location
    @IsNotEmpty()
    @IsNumber()
    lat
    @IsNotEmpty()
    @IsNumber()
    len
    @IsString()
    @IsNotEmpty()
    description
    @IsString()
    @IsNotEmpty()
    name
    @IsString()
    @IsNotEmpty()
    notes
    @IsString()
    @IsNotEmpty()
    communication_details
    
}
