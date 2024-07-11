import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UnitQuestionTextCreateRequestDTO } from './dtos';
import { UnitQuestionTextService } from './unit-question-text.service';

@ApiTags('Unit Question Text')
@ApiBearerAuth()
@Controller('unit-question-texts')
export class UnitQuestionTextController {
  constructor(private unitQuestionTextService: UnitQuestionTextService) {}

  @Post()
  create(@Body() dto: UnitQuestionTextCreateRequestDTO): Promise<void> {
    return this.unitQuestionTextService.create(dto);
  }
}
