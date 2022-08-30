import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ManagerDTO } from 'src/DTO/manager.dto';
import { ManagerService } from './manager.service';

@Controller('manager')
export class ManagerController {
    constructor(private srv: ManagerService) { }

    @Get()
    getAllManagers() {
        return this.srv.getAllManagers();
    }

    @Get(':id')
    getManagerById(@Param('id') managerId: string) {
        return this.srv.getManagerById(managerId);
    }

    @Post()
    createManager(@Body()newManager:ManagerDTO) {
        return this.srv.createManager(newManager);
    }

    @Put(':id')
    updateManager(@Param('id') managerId: string, @Body() updateManager: ManagerDTO) {
        this.srv.updateManager(managerId, updateManager);
    }

    @Delete(':id')
    deleteManager(@Param('id') managerId: string) {
        this.srv.deleteManager(managerId);
    }
}
