import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UnitService } from './unit.service';
import {
  UnitCreateRequestDTO,
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
}
