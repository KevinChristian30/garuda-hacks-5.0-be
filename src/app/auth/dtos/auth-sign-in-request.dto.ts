import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthSignInRequestDTO {
  @IsNotEmpty()
  @ApiProperty({ example: 'admin@gmail.com' })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'admin' })
  password: string;
}
