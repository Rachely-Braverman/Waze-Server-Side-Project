import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose'
import { UserDTO } from 'src/DTO/user.dto';

@Injectable()
export class UserService {

    // users: UserDTO[] = [];
    constructor(@InjectModel('user') private userModel: Model<UserDTO>, @InjectConnection() private connection: Connection) { }

    async getAllUsers() {
        const users = await this.userModel.find();
        return users;
    }

    async createUser(id: number, name: string, age: number){
        const newUser = new this.userModel(
            {
                id,name,age,
            }
        );
        const result = await newUser.save();
        return result;
    }
}
