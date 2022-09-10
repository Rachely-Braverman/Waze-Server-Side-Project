import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { eRole, ManagerDTO } from 'src/DTO/manager.dto';
import { SystemDTO } from 'src/DTO/system.dto';
import { ManagerService } from 'src/manager/manager.service';
import { SystemService } from './system.service';


@Controller('system')
export class SystemController {
    constructor(private srv: SystemService, private managerService: ManagerService) { }

    @Get()
    getAllSystems() {
        return this.srv.getAllSystems();
    }

    @Get(':id')
    getSystemById(@Param('id') id: string) {
        return this.srv.getSystemById(id);
    }

    @Get('getSystemByUrlName/:urlName')
    getSystemByUrlName(@Param('urlName') urlName: string) {
        return this.srv.getSystemByUrlName(urlName);
    }

    @Post()
    async createSystem(@Body() newSystem: SystemDTO) {
        const system = await this.srv.createSystem(newSystem);

        const manager: ManagerDTO = {
            role: eRole.manager,
            user_id: system.ownerId,
            system_id: String(system._id),
            active: true,
            display_name: system.topic,
            //?
            invitation_sent: false,
        }
        await this.managerService.createManager(manager);
        return system;
    }

    //v
    @Put(':id')
    updateSystem(@Param('id') systemId: string, @Body() updateSystem: SystemDTO) {
        this.srv.updateSystem(systemId, updateSystem);
    }

    //v
    @Delete(':id')
    deleteSystem(@Param('id') systemId: string) {
        this.srv.deleteSystem(systemId);
    }
}

