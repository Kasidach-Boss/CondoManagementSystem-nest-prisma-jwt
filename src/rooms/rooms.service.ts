import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Room, Prisma } from '@prisma/client';

@Injectable()
export class RoomsService {
  constructor(private prisma:PrismaService){}

    async room(id:number):Promise<Room>{
      return this.prisma.room.findUnique({
        where:{id:id},
        include:{
          user: true,
          
        }
      })
    }

    async rooms():Promise<Room[]>{
      return this.prisma.room.findMany({
        include:{
          user: true,
          
        }
      });
    }

    async createRoom(data:Prisma.RoomCreateInput):Promise<Room>{
      return this.prisma.room.create({
        data,
      })
    }

    async updateRoom(id:number,data:Prisma.RoomUpdateInput):Promise<Room>{
      return this.prisma.room.update({
        data,
        where:{id:id}
      })
    }

    async deleteRoom(id:number):Promise<Room>{
      return this.prisma.room.delete({
        where:{id:id}
      })
    }
}
