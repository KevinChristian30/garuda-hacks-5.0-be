import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UnitService } from './unit.service';
import { UnitCreateRequestDTO } from './dtos';

@ApiTags('Unit')
@ApiBearerAuth()
@Controller('units')
export class UnitController {
  constructor(private unitService: UnitService) {}

  @Post()
  create(@Body() dto: UnitCreateRequestDTO): Promise<void> {
    return this.unitService.create(dto);
  }
}
