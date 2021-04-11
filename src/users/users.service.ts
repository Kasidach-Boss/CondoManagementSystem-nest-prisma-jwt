import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  User,
  Prisma
} from '@prisma/client';


@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

  async user(id:number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {id:id},
    });
  }

  async users(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(id:number, data:Prisma.UserUpdateInput): Promise<User> {
    
    return this.prisma.user.update({
      data,
      where:{id:id},
    });
  }

  async deleteUser(id:number): Promise<User> {
    return this.prisma.user.delete({
      where:{id:id},
    });
  }

  async findUserByEmail(email:string): Promise<User|undefined>{
    console.log(email);
    return this.prisma.user.findUnique({
      where:{email:email}
      
    })
  }
}
