import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Connection, Model } from 'mongoose'
import { SystemDTO } from 'src/DTO/system.dto';


@Injectable()
export class SystemService {

    // users: SystemDTO[] = [];
    constructor(@InjectModel('system') private SystemModel: Model<SystemDTO>, @InjectConnection() private connection: Connection) { }

    //get
    async getAllSystems() {
        const systems = await this.SystemModel.find();
        return systems;
    }

    //get
    async getSystemById(systemId: string) {
        //בעקרון זה עובד גם בלי ההמרה של ה ID
        return await this.SystemModel.findOne({ _id: new ObjectId(systemId) });
    }

    //add
    // async createUser(id: number, name: string, age: number) {
    //     const newUser = new this.SystemModel(
    //         {
    //             id,
    //             name,
    //             age,
    //         }
    //     );
    //     const result = await newUser.save();
    //     return result;
    // }

    //post
    async createSystem(system: SystemDTO) {
        const result = await this.SystemModel.create(system);
        return result;
    }
    //put
    async updateSystem(systemId: string, system: SystemDTO) {
        await this.SystemModel.findByIdAndUpdate(new ObjectId(systemId), system);
    }
    //delete
    async deleteSystem(systemId: string) {
        await this.SystemModel.findByIdAndDelete(new ObjectId(systemId));
    }

}
