import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.BACKEND_PORT ?? '3001';
  const host = process.env.BACKEND_URL ?? 'http://localhost';

  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(port).then((_) => {
    console.log(`Back is listening on ${host}:${port}`);
  });
}

bootstrap();
