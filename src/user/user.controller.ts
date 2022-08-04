import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private srv: UserService) { }

    @Get()
    getAllUsers(){
        return this.srv.getAllUsers();
    }

    @Post()
    createUser(@Body('id') id: number, @Body('name') name: string, @Body('age') age: number) {
        return this.srv.createUser(id, name, age);
    }
}
