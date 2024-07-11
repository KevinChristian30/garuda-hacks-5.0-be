import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class AuthSignUpRequestDTO {
  @ApiProperty({ example: 'admin@gmail.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'admin' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'admin' })
  @IsNotEmpty()
  password: string;
}
