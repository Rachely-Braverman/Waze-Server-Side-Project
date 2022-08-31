import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationSchema } from 'src/DTO/location.dto';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';


@Module({
    imports: [
        MongooseModule.forFeature([{name: 'location', schema: LocationSchema}])
    ],
    controllers: [LocationController],
    providers: [LocationService],
})
export class LocationModule { }