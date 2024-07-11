import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UnitQuestionImageService } from './unit-question-image.service';
import { UnitQuestionImageCreateRequestDTO } from './dtos/unit-question-image-create-request.dto';

@ApiTags('Unit Question Image')
@ApiBearerAuth()
@Controller('unit-question-images')
export class UnitQuestionImageController {
  constructor(private unitQuestionImageService: UnitQuestionImageService) {}

  @Post()
  create(@Body() dto: UnitQuestionImageCreateRequestDTO): Promise<void> {
    return this.unitQuestionImageService.create(dto);
  }
}
