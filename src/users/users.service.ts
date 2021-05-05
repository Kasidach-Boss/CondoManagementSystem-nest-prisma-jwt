import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  User,
  Prisma
} from '@prisma/client';
// import * as bcrypt from 'bcrypt';
// import { Observable, from } from 'rxjs';
// import { AuthService } from '../auth/auth.service';


@Injectable()
export class UsersService {
    constructor(
      private prisma: PrismaService,
     
    ) {}

  async user(id:number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {id:id},
      include:{
        car:true,
        room:true,
        parking:true,
        
      }
    });
  }

  async users(): Promise<User[]> {
    return this.prisma.user.findMany({
      include:{
        car:true,
        room:true,
        parking:true,
      }
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    // const saltOrRounds = 10;
    // const hashPassword = await bcrypt.hash(data.password,saltOrRounds);
    // data.password = hashPassword;
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

  async findOne(email: string): Promise<User | null>{
    console.log(email);
    return this.prisma.user.findUnique({
      where:{email:email},
      
    })
  }

  

  
  
}