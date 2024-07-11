import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PaginationParamDTO, PaginationResponseDTO } from 'src/dtos';
import { UserResponseDTO } from './dtos';
import { UserService } from './user.service';
import { PaginationParamDTOPipeTransform } from 'src/transforms/pagination-param-dto.pipe-transform';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('User')
@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard)
  list(
    @Query(new PaginationParamDTOPipeTransform())
    paginationParams: PaginationParamDTO,
  ): Promise<PaginationResponseDTO<UserResponseDTO>> {
    return this.userService.list(paginationParams);
  }
}
