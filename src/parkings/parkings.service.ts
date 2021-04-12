import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Parking, Prisma } from '@prisma/client';

@Injectable()
export class ParkingsService {
  constructor( private readonly prisma:PrismaService){}

  async parking(id:number):Promise<Parking>{
    return this.prisma.parking.findUnique({
      where:{id:id},
      include:{
        car:true,
        lot: true,        
      }
    })
  }

  async parkings():Promise<Parking[]>{
    return this.prisma.parking.findMany({
      include:{
        car:true,
        lot: true, 
      }
    });
  }
  async createParking(data:Prisma.ParkingCreateInput):Promise<Parking>{
    return this.prisma.parking.create({
      data,
    })
  }

  async updateParking(id:number,data:Prisma.ParkingUpdateInput):Promise<Parking>{
    return this.prisma.parking.update({
      data,
      where:{id:id}
    })
  }
  async deleteParking(id:number):Promise<Parking>{
    return this.prisma.parking.delete({
      where:{id:id}
    })
  }
}
