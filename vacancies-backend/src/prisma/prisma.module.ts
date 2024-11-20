import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigService } from '@nestjs/config/dist';

@Module({
  providers: [ConfigService, PrismaService],
})
export class PrismaModule {}
