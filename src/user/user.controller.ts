import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDTO } from 'src/DTO/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private srv: UserService) { }

    @Get()
    getAllUsers() {
        return this.srv.getAllUsers();
    }

    //v
    @Get(':id')
    getUserById(@Param('id') userId: string) {
        return this.srv.getUserById(userId);
    }

    @Post()
    createUser(@Body('id') id: number, @Body('name') name: string, @Body('age') age: number) {
        return this.srv.createUser(id, name, age);
    }

    //v
    @Put(':id')
    updateUser(@Param('id') userId: string, @Body() updateUser: UserDTO) {
        this.srv.updateUser(userId, updateUser);
    }

    //v
    @Delete(':id')
    deleteUser(@Param('id') userId: string) {
        this.srv.deleteUser(userId);
    }

}
