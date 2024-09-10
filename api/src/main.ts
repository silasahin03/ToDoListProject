import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';  // Express adaptörünü ekle

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //app.useStaticAssets(join(__dirname, '..', 'public'));
  await app.listen(3000);
}
bootstrap();
