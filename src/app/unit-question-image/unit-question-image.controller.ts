import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Unit Question Image')
@ApiBearerAuth()
@Controller('units')
export class UnitQuestionImageController {}
