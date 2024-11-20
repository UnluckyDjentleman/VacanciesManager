import { Module } from '@nestjs/common';
import { VacanciesModule } from './api/vacancies/vacancies.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [VacanciesModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
