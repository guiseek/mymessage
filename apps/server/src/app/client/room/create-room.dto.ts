import { User } from './../../schemas/user.schema'
import { ApiProperty } from '@nestjs/swagger'

export class CreateRoomDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  users: User[] = []
}
