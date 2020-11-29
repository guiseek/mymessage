import { Logger } from '@nestjs/common'
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app/app.module'
import { ServerLogger } from './app/utilities/server-logger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false
  })
  // const config = app.get(ConfigService);
  app.useLogger(app.get(ServerLogger));

  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)

  const options = new DocumentBuilder()
    .setTitle('Server 4 Client')
    .setDescription('The clients API description')
    .setVersion('1.0')
    .addTag('clients')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)

  const port = process.env.PORT || 3333
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix)
  })
}

bootstrap()
