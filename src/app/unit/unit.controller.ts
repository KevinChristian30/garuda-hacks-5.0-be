import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Unit')
@ApiBearerAuth()
@Controller('unit')
export class UnitController {}
