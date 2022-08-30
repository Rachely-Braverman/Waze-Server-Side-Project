import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { SystemModule } from './system/system.module';
import { LocationController } from './location/location.controller';
import { LocationService } from './location/location.service';

@Module({
  imports: [UserModule, SystemModule, MongooseModule.forRoot('mongodb://localhost:27017')],
  controllers: [AppController, LocationController, LocationController],
  providers: [AppService, LocationService],
})

export class AppModule {

}
