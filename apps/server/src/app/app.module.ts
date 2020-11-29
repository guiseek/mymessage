import { ServerLogger } from './utilities/server-logger';
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import databaseConfig from './config/database.config'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ClientModule } from './client/client.module'
import { configuration } from './config/configuration'
import { ChatModule } from './chat/chat.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      load: [databaseConfig]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        uri: databaseConfig().uri,
      }),
      // inject: [ConfigService],
    }),
    MongooseModule.forRoot(configuration().database),
    ClientModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [ServerLogger, AppService],
})
export class AppModule {}
