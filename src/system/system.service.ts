import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Connection, Model } from 'mongoose'
import { SystemDTO } from 'src/DTO/system.dto';


@Injectable()
export class SystemService {

    // users: SystemDTO[] = [];
    // , @InjectConnection() private connection: Connection)
    constructor(@InjectModel('system') private SystemModel: Model<SystemDTO>) { }

    //get
    async getAllSystems() {
        const systems = await this.SystemModel.find().exec();
        return systems;
    }

    //get
    async getSystemById(systemId: string) {
        //בעקרון זה עובד גם בלי ההמרה של ה ID
        return await this.SystemModel.findOne({ _id: new ObjectId(systemId) }).exec();
    }

    //get
    async getSystemByUrlName(urlName: string) {
        //בעקרון זה עובד גם בלי ההמרה של ה ID
        return await this.SystemModel.findOne({ urlName }).exec();
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
        try {
            const result = await (await this.SystemModel.create(system)).save();
            return result;
    } catch (error) {
            console.error();
        }

        const result = await (await this.SystemModel.create(system)).save();
        return result;
    }
    
    //put
    async updateSystem(systemId: string, system: SystemDTO) {
        await (await this.SystemModel.findByIdAndUpdate(new ObjectId(systemId), system)).save();
    }

    //delete
    async deleteSystem(systemId: string) {
        await (await this.SystemModel.findByIdAndDelete(new ObjectId(systemId)));
    }

}
