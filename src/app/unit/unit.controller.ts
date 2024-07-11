import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UnitService } from './unit.service';
import {
  UnitCreateRequestDTO,
  UnitQuestionResponseDTO,
  UnitResponseDTO,
  UnitUpdateRequestDTO,
} from './dtos';

@ApiTags('Unit')
@ApiBearerAuth()
@Controller('units')
export class UnitController {
  constructor(private unitService: UnitService) {}

  @Post()
  create(@Body() dto: UnitCreateRequestDTO): Promise<void> {
    return this.unitService.create(dto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UnitUpdateRequestDTO,
  ): Promise<void> {
    return this.unitService.update(id, dto);
  }

  @Get()
  listAll(): Promise<UnitResponseDTO[]> {
    return this.unitService.listAll();
  }

  @Get(':id/questions')
  listQuestions(@Param('id') id: string): Promise<UnitQuestionResponseDTO[]> {
    return this.unitService.listQuestions(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.unitService.delete(id);
  }
}
