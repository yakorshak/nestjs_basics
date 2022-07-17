import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // использовать с документации сохранение сессии в ДБ
  app.use(
    session({
      secret: 'gefhwk12', // get env vars
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 10000 },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
