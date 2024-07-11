import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Unit Question Text')
@ApiBearerAuth()
@Controller('unit-question-texts')
export class UnitQuestionTextController {}
