import { Lot } from '.prisma/client';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { LotsService } from './lots.service';
import { Prisma } from '@prisma/client';


@Controller('lots')
export class LotsController {
  constructor(private readonly lotsService: LotsService) {}

  @Get(':id')
  async getLot(@Param('id') id:number):Promise<Lot>{
    return this.lotsService.lot(+id);
  }

  @Get('lotslist')
  async getLots():Promise<Lot[]>{
    return this.lotsService.lots();
  }
  
  @Post('register')
  async createLot(@Body() data: Prisma.LotCreateInput):Promise<Lot>{
    return this.lotsService.createLot(data);
  }

  @Put(':id')
  async updateLot(
    @Param('id') id:number,
    @Body() data:Prisma.LotUpdateInput, 
    
  ):Promise<Lot>{
    return this.lotsService.updateLot(+id,data);
  }

  @Delete(':id')
  async deleteLot(@Param('id') id:number):Promise<Lot>{
    return this.lotsService.deleteLot(+id);
  }

}
