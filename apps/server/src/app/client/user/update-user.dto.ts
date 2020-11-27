import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false, default: true })
  isEnabled? = true;
}
