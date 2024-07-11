import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  AuthMeResponseDTO,
  AuthSignInRequestDTO,
  AuthSignUpRequestDTO,
  AuthTokenResponseDTO,
} from './dtos';
import { AuthGuard } from './auth.guard';
import UserMapper from '../user/mapper/user.mapper';

@ApiTags('Auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() dto: AuthSignUpRequestDTO): Promise<void> {
    return this.authService.signUp(dto);
  }

  @Post('sign-in')
  signIn(@Body() dto: AuthSignInRequestDTO): Promise<AuthTokenResponseDTO> {
    return this.authService.signIn(dto);
  }

  @Get('me')
  @UseGuards(AuthGuard)
  me(@Request() request: any): AuthMeResponseDTO {
    const sub = request.user.sub;

    return {
      id: sub.id,
      email: sub.email,
      name: sub.name,
    };
  }
}
