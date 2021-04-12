import { Module } from '@nestjs/common';
import { StickersService } from './stickers.service';
import { StickersController } from './stickers.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [StickersController],
  providers: [StickersService,PrismaService]
})
export class StickersModule {}
