import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MockDatabase } from './helper/mock.database.connector';

async function bootstrap() {
  const db = new MockDatabase();
  await db.connect();

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
