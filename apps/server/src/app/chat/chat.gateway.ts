import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets'
import { ServerLogger } from '../utilities'
import { ChatService } from './chat.service'
import { CreateChatDto } from './dto/create-chat.dto'
import { UpdateChatDto } from './dto/update-chat.dto'

@WebSocketGateway()
export class ChatGateway {

  private logger: ServerLogger = new ServerLogger('Chat')

  constructor(private readonly chatService: ChatService) {}

  @SubscribeMessage('createChat')
  create(@MessageBody() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto)
  }

  @SubscribeMessage('findAllChat')
  findAll() {
    return this.chatService.findAll()
  }

  @SubscribeMessage('findOneChat')
  findOne(@MessageBody() id: number) {
    return this.chatService.findOne(id)
  }

  @SubscribeMessage('updateChat')
  update(@MessageBody() updateChatDto: UpdateChatDto) {
    return this.chatService.update(updateChatDto.id, updateChatDto)
  }

  @SubscribeMessage('removeChat')
  remove(@MessageBody() id: number) {
    return this.chatService.remove(id)
  }
}
