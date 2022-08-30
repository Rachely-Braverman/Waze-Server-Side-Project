import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ManagerDTO } from 'src/DTO/manager.dto';

@Injectable()
export class ManagerService {

    constructor(@InjectModel('manager') private managerModel: Model<ManagerDTO>) { }

    async getAllManagers() {
        const managers = await this.managerModel.find().exec();
        return managers;
    }

    async getManagerById(managerId: string): Promise<ManagerDTO> {
        return await this.managerModel.findOne({ _id: managerId }).exec();
    }

    async createManager(manager: ManagerDTO) {
        const result = await (await this.managerModel.create(manager)).save();
        return result;
    }

    async updateManager(managerId: string, manager: ManagerDTO) {
        await (await this.managerModel.findByIdAndUpdate(managerId, manager)).save();
    }

    async deleteManager(managerId: string) {
        await this.managerModel.findByIdAndDelete(managerId);
    }
    
}
