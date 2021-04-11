import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from './auth/auth.module';


@Module({
   imports: [UsersModule, AuthModule],
   controllers: [AppController],
   providers: [AppService,PrismaService],
})
export class AppModule {}
