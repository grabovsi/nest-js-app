import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // test comment 222333333333333333
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
