import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty()
  from: string;

  @ApiProperty()
  to: string;

  @ApiProperty()
  content: string
}
