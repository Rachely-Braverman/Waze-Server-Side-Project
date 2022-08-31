import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LocationDTO } from 'src/DTO/location.dto';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {

    constructor(private srv: LocationService) { }

    @Get()
    getAllLocations(){
        return this.srv.getAllLocations();
    }

    @Get(':id')
    getLocationById(@Param('id') id: string){
        return this.srv.getLocationById(id);
    }

    @Post()
    createLocation(@Body()newLocation:LocationDTO) {
        return this.srv.createLocation(newLocation);
    }

    //v
    @Put(':id')
    updateLocation(@Param('id') locationId: string, @Body() updateLocation: LocationDTO) {
        this.srv.updateLocation(locationId, updateLocation);
    }

    //v
    @Delete(':id')
    deleteLocation(@Param('id') locationId: string) {
        this.srv.deleteLocation(locationId);
    }
}

