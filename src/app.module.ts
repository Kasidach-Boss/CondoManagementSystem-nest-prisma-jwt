import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { LotsModule } from './lots/lots.module';
import { CarsModule } from './cars/cars.module';
import { StickersModule } from './stickers/stickers.module';
import { RoomsModule } from './rooms/rooms.module';
import { ParkingsModule } from './parkings/parkings.module';



@Module({
   imports: [UsersModule, AuthModule, LotsModule, CarsModule, StickersModule, RoomsModule, ParkingsModule],
   controllers: [AppController],
   providers: [AppService,PrismaService],
})
export class AppModule {}
