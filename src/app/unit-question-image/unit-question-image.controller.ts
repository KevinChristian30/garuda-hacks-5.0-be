import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UnitQuestionImageService } from './unit-question-image.service';
import {
  UnitQuestionImageCreateRequestDTO,
  UnitQuestionImageUpdateRequestDTO,
} from './dtos';

@ApiTags('Unit Question Image')
@ApiBearerAuth()
@Controller('unit-question-images')
export class UnitQuestionImageController {
  constructor(private unitQuestionImageService: UnitQuestionImageService) {}

  @Post()
  create(@Body() dto: UnitQuestionImageCreateRequestDTO): Promise<void> {
    return this.unitQuestionImageService.create(dto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UnitQuestionImageUpdateRequestDTO,
  ): Promise<void> {
    return this.unitQuestionImageService.update(id, dto);
  }
}
