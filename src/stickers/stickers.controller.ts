import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StickersService } from './stickers.service';
import { Sticker, Prisma } from '@prisma/client';


@Controller('stickers')
export class StickersController {
  constructor(private readonly stickersService: StickersService) {}

  @Get(':id')
  async getSticker (@Param('id') id:number):Promise<Sticker>{
    return this.stickersService.sticker(+id);
  }

  @Get('list')
  async getStickers () :Promise<Sticker[]>{
    return this.stickersService.stickers();
  }

  @Post('register')
  async createSticker(@Body() data: Prisma.StickerCreateInput):Promise<Sticker>{
    return this.stickersService.createSticker(data);
  }

  @Put(':id')
  async updateSticker(
    @Param('id') id:number,
    @Body() data: Prisma.StickerUpdateInput,
    ):Promise<Sticker>{
    return this.stickersService.updateSticker(+id,data);
  }

  @Delete(':id')
  async deleteSticker(@Param('id') id:number):Promise<Sticker>{
    return this.stickersService.deleteSticker(+id);
  }
}
