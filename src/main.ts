import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  // getting the port env var
  const PORT = configService.get<number>('config.app.port');

  // ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: true,
      validationError: { target: false },
      exceptionFactory: (e): BadRequestException => {
        console.error(e);
        return new BadRequestException({
          statusCode: 400,
          message: 'Invalid request',
        });
      },
      stopAtFirstError: true,
    }),
  );

  await app.listen(PORT);
}
bootstrap();
