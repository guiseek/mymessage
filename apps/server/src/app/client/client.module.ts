import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema, User } from '../schemas/user.schema'
import { MessageSchema, Message } from '../schemas/message.schema'
import { RoomSchema, Room } from '../schemas/room.schema'
import { UserService } from './user/user.service'
import { MessageService } from './message/message.service'
import { RoomService } from './room/room.service'
import { ClientController } from './client.controller'
import { MeetingGateway } from './room/meeting.gateway'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Message.name, schema: MessageSchema },
      { name: Room.name, schema: RoomSchema },
    ]),
  ],
  providers: [UserService, MessageService, RoomService, MeetingGateway],
  controllers: [ClientController],
})
export class ClientModule {}
