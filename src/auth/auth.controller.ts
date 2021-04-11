import { Controller, Body, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { Prisma, User as UserModel } from '@prisma/client';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { JwtAuthGuard } from './guard/jwt-auth.guard';


@Controller('auth')
export class AuthController{
    constructor(
        private readonly usersService: UsersService,
        private authService: AuthService
    ) {}
    @Post('signup')
    async signupUser(
      @Body() userData:Prisma.UserCreateInput
    ): Promise<UserModel> {
      return this.usersService.createUser(userData);
    }
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }
  
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
}
