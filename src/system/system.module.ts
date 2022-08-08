import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemSchema } from 'src/DTO/system.dto';
import { SystemController } from './system.controller';
import { SystemService } from './system.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'system', schema: SystemSchema}])
    ],
    controllers: [SystemController],
    providers: [SystemService],
})
export class SystemModule { }