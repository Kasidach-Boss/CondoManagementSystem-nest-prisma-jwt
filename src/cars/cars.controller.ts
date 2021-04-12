import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car, Prisma } from '@prisma/client';


@Controller('cars')
export class CarsController {
  constructor( private readonly carsService: CarsService ){}

  @Get(':id')
  async getCar (@Param('id') id:number):Promise<Car>{
    return this.carsService.car(+id);
  }

  @Get('carslist')
  async getCars () :Promise<Car[]>{
    return this.carsService.cars();
  }

  @Post('register')
  async createCar(@Body() data: Prisma.CarCreateInput):Promise<Car>{
    return this.carsService.createCar(data);
  }

  @Put(':id')
  async updateCar(
    @Param('id') id:number,
    @Body() data: Prisma.CarUpdateInput,
    ):Promise<Car>{
    return this.carsService.updateCar(+id,data);
  }

  @Delete(':id')
  async deleteCar(@Param('id') id:number):Promise<Car>{
    return this.carsService.deleteCar(+id);
  }
}
