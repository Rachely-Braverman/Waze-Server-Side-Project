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
    createUser(@Body()newUser:UserDTO) {
        return this.srv.createUser(newUser);
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
