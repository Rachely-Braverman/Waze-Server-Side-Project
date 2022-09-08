import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { SystemModule } from './system/system.module';
import { LocationModule } from './location/location.module';
import { ManagerModule } from './manager/manager.module';
import { RequestModule } from './request/request.module';
import { NestModule } from '@nestjs/common';
import { AuthMiddleware } from './auth/auth.middleware';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [UserModule, SystemModule, MongooseModule.forRoot('mongodb://localhost:27017'), 
  , ConfigModule.forRoot({load:[configuration]}),
  ManagerModule, RequestModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*', method: RequestMethod.ALL
    });
  }
}
