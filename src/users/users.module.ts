import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthService } from '../auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../auth/constants';
import { AuthModule } from '../auth/auth.module';
import {PassportModule} from '@nestjs/passport';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({}),
    
    
  ],
  exports: [UsersService],
  controllers:[UsersController],
  providers:[AuthService,PrismaService,UsersService]
})
export class UsersModule {}
