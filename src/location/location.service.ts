import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Model } from 'mongoose';
import { LocationDTO } from "../DTO/location.dto";
@Injectable()
export class LocationService {

    constructor(@InjectModel('location') private LocationModel: Model<LocationDTO>) { }

    //get
    async getAllLocations() {
        const locations = await this.LocationModel.find().exec();
        return locations;
    }

    //get
    async getLocationById(locationId: string) {
        //בעקרון זה עובד גם בלי ההמרה של ה ID
        return await this.LocationModel.findOne({ _id: new ObjectId(locationId) }).exec();
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
    async createLocation(location: LocationDTO) {
        const result = await (await this.LocationModel.create(location)).save();
        return result;
    }

    //put
    async updateLocation(locationId: string, location: LocationDTO) {
        await (await this.LocationModel.findByIdAndUpdate(new ObjectId(locationId), location)).save();
    }

    //delete
    async deleteLocation(locationId: string) {
        await (await this.LocationModel.findByIdAndDelete(new ObjectId(locationId)));
    }

}
