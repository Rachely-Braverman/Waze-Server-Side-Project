import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RequestDTO } from 'src/DTO/request.dto';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {
    constructor(private srv: RequestService) { }

    @Get()
    getAllRequests() {
        return this.srv.getAllRequests();
    }

    @Get(':id')
    getRequestById(@Param('id') requestId: string) {
        return this.srv.getRequestById(requestId);
    }

    @Post()
    createRequest(@Body()newRequest:RequestDTO) {
        return this.srv.createRequest(newRequest);
    }

    @Put(':id')
    updateRequest(@Param('id') requestId: string, @Body() updateRequest: RequestDTO) {
        this.srv.updateRequest(requestId, updateRequest);
    }

    @Delete(':id')
    deleteRequest(@Param('id') requestId: string) {
        this.srv.deleteRequest(requestId);
    }
}
