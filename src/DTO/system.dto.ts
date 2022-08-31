import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import mongoose from 'mongoose';

export const SystemSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  urlName: { type: String, required: true, unique: true },
  objectName: { type: String, required: true },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserDTO',
    required: true,
  },
  description: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

export class SystemDTO {
  @IsNotEmpty()
  @Length(2)
  @IsString()
  topic: string;
  @IsNotEmpty()
  objectName: string;
  @IsNotEmpty()
  @IsString()
  ownerId: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  @Length(9, 10)
  phone: string;
  @IsNotEmpty()
  @IsString()
  urlName: string;
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";
import mongoose from "mongoose";

export const SystemSchema = new mongoose.Schema({

    topic: { type: String, required: true },
    urlName: { type: String, required: true, unique: true },
    objectName: { type: String, required: true },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref:'UserDTO', required: true },
    description: { type: String, required: true }, 
    email: { type: String, required: true },
    phone: { type: String, required: true },
    

});

export class SystemDTO {

    @IsNotEmpty()
    @Length(2)
    @IsString()
    topic: String;
    @IsNotEmpty()
    objectName: String;
    @IsNotEmpty()
    @IsString()
    ownerId: String;
    @IsString()
    @IsNotEmpty()
    description:String;
    @IsNotEmpty()
    @IsEmail()
    email:String;
    @IsNotEmpty()
    @IsString()
    @Length(9, 10)
    phone:String;
    @IsNotEmpty()
    @IsString()
    urlName:String;
}
