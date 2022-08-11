import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { ObjectId } from 'mongodb';
import { UserService } from './user.service';
import { UserDTO } from '../DTO/user.dto';
import { Model } from 'mongoose';
describe('UserController', () => {
  let controller: UserController;
  let service: UserService;
  beforeEach(() => {
    // const module: TestingModule = await Test.createTestingModule({
    //   controllers: [UserController],
    //   providers: [UserService],
    // }).compile();
    // controller = module.get<UserController>(UserController);
    let u: Model<UserDTO>;
    service = new UserService(u);
    controller = new UserController(service);
  });
  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });
  describe('controller', () => {
    it('getUserById must get id', () => {
      controller.getUserById('').then((res) => {
        expect(res).toBe(404);
      });
    });
    it('getUserById must get id', () => {
      const userId = '62f0ec7ecb1d8c6527ef7ef9';
      controller.getUserById(userId).then((res) => {
        expect(res).toBe({
          _id: '62f0ec7ecb1d8c6527ef7ef9',
          role: 'manager',
          __v: 0,
        });
      });
    });
    describe('service', () => {
      it('getAllUsers should return an array of users', () => {
        const result = service.getAllUsers();
        expect(typeof result).toEqual(typeof []);
      });
      it('get user by id should return an object with user', () => {
        const result = service.getUserById('62f0ec7ecb1d8c6527ef7ef9');
        expect(typeof result).toEqual(typeof {});
      });
    });
  });
});
