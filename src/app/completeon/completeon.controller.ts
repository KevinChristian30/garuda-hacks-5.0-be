import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CompleteonService } from './completeon.service';

@ApiTags('Completeon')
@ApiBearerAuth()
@Controller('completeon')
export class CompleteonController {
  constructor(private completeonService: CompleteonService) {}
}
