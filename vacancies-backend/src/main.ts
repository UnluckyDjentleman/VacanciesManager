import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.CLIENT_HOST,
    credentials: true,
  });
  app.setGlobalPrefix('api');
  await app.listen(6958);
}
bootstrap();
