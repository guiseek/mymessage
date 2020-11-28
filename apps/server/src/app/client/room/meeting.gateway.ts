import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { Logger } from '@nestjs/common'
import { Server, Socket } from 'socket.io'
@WebSocketGateway()
export class MeetingGateway {
  connectedClients = []
  @WebSocketServer()
  server: Server
  data = {}

  private logger: Logger = new Logger('mymessage')

  @SubscribeMessage('offer')
  offer(client: Socket, payload: Partial<FormData>) {
    this.data = { ...this.data, ...payload }
    this.logger.log(`offer: ${JSON.stringify(payload)}.`)
    client.broadcast.emit('offer', payload)
  }

  @SubscribeMessage('answer')
  answer(client: Socket, payload: Partial<FormData>) {
    this.data = { ...this.data, ...payload }
    this.logger.log(`answer: ${JSON.stringify(payload)}.`)
    client.broadcast.emit('answer', payload)
  }
}
