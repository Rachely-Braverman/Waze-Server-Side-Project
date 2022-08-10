import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose'
import { UserDTO } from 'src/DTO/user.dto';

@Injectable()
export class UserService {

    // users: UserDTO[] = [];
    // , @InjectConnection() private connection: Connection
    constructor(@InjectModel('user') private userModel: Model<UserDTO>) { }

    //get
    async getAllUsers() {
        const users = await this.userModel.find().exec();
        return users;
    }

    //get
    async getUserById(userId: string): Promise<UserDTO> {
        return await this.userModel.findOne({ _id: userId }).exec();
    }

    //post
    async createUser(user: UserDTO) {
        const result = await (await this.userModel.create(user)).save();
        return result;
    }
    //put
    async updateUser(userId: string, user: UserDTO) {
        await (await this.userModel.findByIdAndUpdate(userId, user)).save();
    }
    //delete
    async deleteUser(userId: string) {
        await (await this.userModel.findByIdAndDelete(userId)).save();
    }
    
}
