import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ParkingsService } from './parkings.service';
import { Parking, Prisma } from '@prisma/client';

@Controller('parkings')
export class ParkingsController {
  constructor(private readonly parkingsService: ParkingsService) {}

  @Get(':id')
  async getParking (@Param('id') id:number):Promise<Parking>{
    return this.parkingsService.parking(+id);
  }

  @Get('list')
  async getParkings () :Promise<Parking[]>{
    return this.parkingsService.parkings();
  }

  @Post('register')
  async createParking(@Body() data: Prisma.ParkingCreateInput):Promise<Parking>{
    return this.parkingsService.createParking(data);
  }

  @Put(':id')
  async updateParking(
    @Param('id') id:number,
    @Body() data: Prisma.ParkingUpdateInput,
    ):Promise<Parking>{
    return this.parkingsService.updateParking(+id,data);
  }

  @Delete(':id')
  async deleteParking(@Param('id') id:number):Promise<Parking>{
    return this.parkingsService.deleteParking(+id);
  }
}
