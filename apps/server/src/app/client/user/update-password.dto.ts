import { ApiProperty } from '@nestjs/swagger';

export class UpdatePasswordDto {
  @ApiProperty()
  _id: string;

  @ApiProperty({
    required: true
  })
  email: string;

  @ApiProperty({
    required: true,
  })
  password: string;

  @ApiProperty({
    required: true,
  })
  newPassword: string;
}
