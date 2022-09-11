import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RequestDTO } from 'src/DTO/request.dto';

@Injectable()
export class RequestService {
    constructor(@InjectModel('request') private requestModel: Model<RequestDTO>) { }

    async getAllRequests() {
        const requests = await this.requestModel.find().exec();
        return requests;
    }

    async getRequestById(requestId: string): Promise<RequestDTO> {
        return await this.requestModel.findOne({ _id: requestId }).exec();
    }

    async createRequest(request: RequestDTO) {
        const result = await (await this.requestModel.create(request)).save();
        return result;
    }

    async updateRequest(requestId: string, request: RequestDTO) {
        await (await this.requestModel.findByIdAndUpdate(requestId, request)).save();
    }

    async deleteRequest(requestId: string) {
        await this.requestModel.findByIdAndDelete(requestId);
    }
    
}
