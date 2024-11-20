import { Module } from '@nestjs/common';
import { VacanciesService } from './vacancies.service';
import { VacanciesController } from './vacancies.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config/dist';

@Module({
  providers: [ConfigService, PrismaService, VacanciesService],
  controllers: [VacanciesController],
})
export class VacanciesModule {}
