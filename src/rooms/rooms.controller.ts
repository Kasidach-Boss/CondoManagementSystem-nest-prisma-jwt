import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room, Prisma } from '@prisma/client';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get(':id')
  async getRoom (@Param('id') id:number):Promise<Room>{
    return this.roomsService.room(+id);
  }

  @Get()
  async getRooms () :Promise<Room[]>{
    return this.roomsService.rooms();
  }

  @Post('register')
  async createRoom(@Body() data: Prisma.RoomCreateInput):Promise<Room>{
    return this.roomsService.createRoom(data);
  }

  @Put(':id')
  async updateRoom(
    @Param('id') id:number,
    @Body() data: Prisma.RoomUpdateInput,
    ):Promise<Room>{
    return this.roomsService.updateRoom(+id,data);
  }

  @Delete(':id')
  async deleteRoom(@Param('id') id:number):Promise<Room>{
    return this.roomsService.deleteRoom(+id);
  }
  
}
