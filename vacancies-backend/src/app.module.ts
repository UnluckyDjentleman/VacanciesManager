import { Module } from '@nestjs/common';
import { VacanciesModule } from './api/vacancies/vacancies.module';
import { PrismaModule } from './prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    VacanciesModule,
    PrismaModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'vacancies-frontend', 'dist'),
      exclude: ['./api/*'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
