import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemSchema } from 'src/DTO/system.dto';
import { ManagerModule } from 'src/manager/manager.module';
import { SystemController } from './system.controller';
import { SystemService } from './system.service';

@Module({
    imports: [ManagerModule,
        MongooseModule.forFeature([{name: 'system', schema: SystemSchema}])
    ],
    controllers: [SystemController],
    providers: [SystemService],
})
export class SystemModule { }