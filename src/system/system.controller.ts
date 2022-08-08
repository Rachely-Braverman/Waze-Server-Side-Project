import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SystemDTO } from 'src/DTO/system.dto';
import { SystemService } from './system.service';

@Controller('system')
export class SystemController {
    constructor(private srv: SystemService) { }

    @Get()
    getAllSystems(){
        return this.srv.getAllSystems();
    }

    @Get()
    getSystemById(id:'string'){
        return this.srv.getSystemById(id);
    }

    @Post()
    createSystem(@Body()newSystem:SystemDTO) {
        return this.srv.createSystem(newSystem);
    }

    //v
    @Put(':id')
    updateUser(@Param('id') systemId: string, @Body() updateSystem: SystemDTO) {
        this.srv.updateSystem(systemId, updateSystem);
    }

    //v
    @Delete(':id')
    deleteUser(@Param('id') systemId: string) {
        this.srv.deleteSystem(systemId);
    }
}
