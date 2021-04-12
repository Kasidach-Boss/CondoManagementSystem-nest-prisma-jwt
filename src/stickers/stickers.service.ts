import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Sticker, Prisma } from '@prisma/client';

@Injectable()
export class StickersService {
 constructor(private prisma: PrismaService) {}

  async sticker(id:number): Promise<Sticker> {
    return this.prisma.sticker.findUnique({
      where: {id:id},
    });
  }

  async stickers(): Promise<Sticker[]> {
    return this.prisma.sticker.findMany();
  }

  async createSticker(data: Prisma.StickerCreateInput): Promise<Sticker> {
    return this.prisma.sticker.create({
      data,
    });
  }

  async updateSticker(id:number, data:Prisma.StickerUpdateInput): Promise<Sticker> {
    
    return this.prisma.sticker.update({
      data,
      where:{id:id},
    });
  }

  async deleteSticker(id:number): Promise<Sticker> {
    return this.prisma.sticker.delete({
      where:{id:id},
    });
  }


}
