import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { SystemModule } from './system/system.module';
import { LocationController } from './location/location.controller';
import { LocationModule } from './location/location.module';

@Module({
  imports: [UserModule, SystemModule, LocationModule, MongooseModule.forRoot('mongodb://localhost:27017')],
import { ManagerModule } from './manager/manager.module';
import { RequestModule } from './request/request.module';

@Module({
  imports: [UserModule, SystemModule, MongooseModule.forRoot('mongodb://localhost:27017'), 
  ManagerModule, RequestModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
