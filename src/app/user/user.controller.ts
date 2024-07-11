import { Controller, Get, Query, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PaginationParamDTO, PaginationResponseDTO } from 'src/dtos';
import { UserRankResponseDTO, UserResponseDTO } from './dtos';
import { UserService } from './user.service';
import { PaginationParamDTOPipeTransform } from 'src/transforms/pagination-param-dto.pipe-transform';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('User')
@ApiBearerAuth()
@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  @UseGuards(AuthGuard)
  list(
    @Query(new PaginationParamDTOPipeTransform())
    paginationParams: PaginationParamDTO,
  ): Promise<PaginationResponseDTO<UserResponseDTO>> {
    return this.userService.list(paginationParams);
  }

  @Get('rank')
  @UseGuards(AuthGuard)
  rank(@Request() request: any): Promise<UserRankResponseDTO[]> {
    return this.userService.rank(request.user.sub.id);
  }
}
