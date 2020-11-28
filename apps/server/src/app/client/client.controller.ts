import { Request } from 'express'
import { Controller, Get, Post, Body, Req } from '@nestjs/common'
import { CreateUserDto } from './user/create-user.dto'
import { CreateMessageDto } from './message/create-message.dto'
import { CreateRoomDto } from './room/create-room.dto'
import { MessageService } from './message/message.service'
import { UserService } from './user/user.service'
import { RoomService } from './room/room.service'

@Controller('client')
export class ClientController {
  constructor(
    private readonly userService: UserService,
    private readonly messageService: MessageService,
    private readonly roomService: RoomService
  ) {}

  /**
   * Users
   * @param request
   */
  @Get('users')
  findAllUsers(@Req() request: Request) {
    return this.userService.findAll()
  }
  @Post('users')
  createUser(@Body() data: CreateUserDto) {
    return this.userService.create(data)
  }

  /**
   * Messages
   * @param request
   */
  @Get('messages')
  findAllMessages(@Req() request: Request) {
    return this.messageService.findAll()
  }
  @Post('messages')
  createMessage(@Body() data: CreateMessageDto) {
    return this.messageService.create(data)
  }

  /**
   * Rooms
   * @param request
   */
  @Get('rooms')
  findAllRooms(@Req() request: Request) {
    return this.roomService.findAll()
  }
  @Post('rooms')
  createRoom(@Body() data: CreateRoomDto) {
    return this.roomService.create(data)
  }
}
