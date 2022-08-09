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
        const users = await this.userModel.find();
        return users;
    }

    //get
    async getUserById(userId: string): Promise<UserDTO> {
        return await this.userModel.findOne({ _id: userId });
    }

    //add
    async createUser(id: number, name: string, age: number) {
        const newUser = new this.userModel(
            {
                id,
                name,
                age,
            }
        );
        const result = await newUser.save();
        return result;
    }
    //put
    async updateUser(userId: string, user: UserDTO) {
        await this.userModel.findByIdAndUpdate(userId, user);
    }
    //delete
    async deleteUser(userId: string) {
        await this.userModel.findByIdAndDelete(userId);
    }
    
}
