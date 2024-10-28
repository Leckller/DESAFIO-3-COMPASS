import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import SeedsService from './Db/Seeds/Seeds.Service';

const port = process.env.SERVER_PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Aqui você chama o serviço de seed
  const seedService = app.get(SeedsService);
  await seedService.seeds();

  app.enableCors({
    "origin": "*",
  })

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);

  console.log(`Servidor rodando na porta ${port}`)

}
bootstrap();
