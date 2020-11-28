import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ClientModule } from './client/client.module'
import { configuration } from './config/configuration'
import { ChatModule } from './chat/chat.module'

@Module({
  imports: [
    MongooseModule.forRoot(configuration().database),
    ClientModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
