import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ManagerSchema } from 'src/DTO/manager.dto';
import { ManagerController } from './manager.controller';
import { ManagerService } from './manager.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'manager', schema: ManagerSchema}])
    ],
    controllers: [ManagerController],
    providers: [ManagerService],
})
export class ManagerModule {}
