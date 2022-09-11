import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestSchema } from 'src/DTO/request.dto';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'request', schema: RequestSchema}])
    ],
    controllers: [RequestController],
    providers: [RequestService],
})
export class RequestModule {}
