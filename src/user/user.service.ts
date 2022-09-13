import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
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
        // let u;
        // return await this.userModel.findOne({ _id: userId }).exec();
        const u =  await this.userModel.findById({ _id: userId}).exec();
        console.log(u);
        return u;
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
