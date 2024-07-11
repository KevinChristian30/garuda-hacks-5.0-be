import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CompleteonService } from './completeon.service';
import { CompleteonCreateRequestDTO } from './dtos';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('Completeon')
@ApiBearerAuth()
@Controller('completeon')
export class CompleteonController {
  constructor(private completeonService: CompleteonService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Request() request: any,
    @Body() dto: CompleteonCreateRequestDTO,
  ): Promise<void> {
    return this.completeonService.create(dto, request.user.sub.id);
  }
}
