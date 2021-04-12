import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Lot, Prisma } from '@prisma/client';

@Injectable()
export class LotsService {
  constructor( private readonly prisma:PrismaService){}

  async lot(id:number):Promise<Lot>{
    return this.prisma.lot.findUnique({
      where:{id:id},
      include:{
        sticker:true,
        parking: true,

      }
    })
  }

  async lots():Promise<Lot[]>{
    return this.prisma.lot.findMany({
      include:{
        sticker:true,
        parking: true, 
      }
    });
  }
  async createLot(data:Prisma.LotCreateInput):Promise<Lot>{
    return this.prisma.lot.create({
      data,
    })
  }

  async updateLot(id:number,data:Prisma.LotUpdateInput):Promise<Lot>{
    return this.prisma.lot.update({
      data,
      where:{id:id}
    })
  }
  async deleteLot(id:number):Promise<Lot>{
    return this.prisma.lot.delete({
      where:{id:id}
    })
  }


}
