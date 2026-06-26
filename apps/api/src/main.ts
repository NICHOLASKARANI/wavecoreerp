import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'http://localhost:3000', credentials: true });
  app.setGlobalPrefix('api/v1');
  await app.listen(process.env.PORT || 4000);
  console.log(`🚀 API running on http://localhost:${process.env.PORT || 4000}`);
}
bootstrap();