import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Prisma, User as UserModel, User } from '@prisma/client';
import { UsersService } from './users.service';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../auth/guard/local-auth.guard';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService:UsersService,
        private authService: AuthService
        
    ){}
    // @Post('user')
    // async signupUser(
    //   @Body() userData:Prisma.UserCreateInput
    // ): Promise<UserModel> {
    //   return this.usersService.createUser(userData);
    // }
    @Get(':id')
    async getUser(@Param('id') id:number):Promise<UserModel>{
      return this.usersService.user(+id);
    }
    @Get()
    async getUsers():Promise<UserModel[]>{
      return this.usersService.users();
    }

    @Put(':id')
    async updateUser(
      @Param('id')id:number,
      @Body() userData: Prisma.UserUpdateInput,
    ):Promise<UserModel>{
      return this.usersService.updateUser(+id,userData)
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:number):Promise<UserModel>{
      return this.usersService.deleteUser(+id)
    }

  //   @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
  
}
