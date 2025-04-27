import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { SwaggerUIExpress } from 'swagger-ui-express';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  const config = new DocumentBuilder()
    .setTitle('School Management API')
    .setDescription('API para gestão escolar, incluindo autenticação')
    .setVersion('1.0')
    .addBearerAuth() // Adiciona suporte para autenticação via Bearer Token
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      swaggerUIPath: '/api/docs', // Define a rota onde a UI Swagger estará disponível
    },
  });

  await app.listen(3000);
}
bootstrap();
