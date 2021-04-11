import { Controller, Get,Post,UseGuards,Request,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Prisma, User as UserModel, User } from '@prisma/client';
import { LocalAuthGuard } from './auth/guard/local-auth.guard';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly usersService: UsersService,
    // private authService: AuthService
      
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @Post('user')
  //   async signupUser(
  //     @Body() userData:Prisma.UserCreateInput
  //   ): Promise<UserModel> {
  //     return this.usersService.createUser(userData);
  //   }
  // @UseGuards(LocalAuthGuard)
  //   @Post('auth/login')
  //   async login(@Request() req) {
  //     return this.authService.login(req.user);
  //   }
  
  //   @UseGuards(JwtAuthGuard)
  //   @Get('profile')
  //   getProfile(@Request() req) {
  //     return req.user;
  //   }
}
