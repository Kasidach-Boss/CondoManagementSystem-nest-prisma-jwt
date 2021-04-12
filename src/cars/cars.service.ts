import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Car, Prisma } from '@prisma/client';

@Injectable()
export class CarsService {
    constructor(private prisma:PrismaService){}

    async car(id:number):Promise<Car>{
      return this.prisma.car.findUnique({
        where:{id:id},
        include:{
          user: true,
          parking: true,
          stickers: true,
        }
      })
    }

    async cars():Promise<Car[]>{
      return this.prisma.car.findMany({
        include:{
          user: true,
          parking: true,
          stickers: true,
        }
      });
    }

    async createCar(data:Prisma.CarCreateInput):Promise<Car>{
      return this.prisma.car.create({
        data,
      })
    }

    async updateCar(id:number,data:Prisma.CarUpdateInput):Promise<Car>{
      return this.prisma.car.update({
        data,
        where:{id:id}
      })
    }

    async deleteCar(id:number):Promise<Car>{
      return this.prisma.car.delete({
        where:{id:id}
      })
    }
}
