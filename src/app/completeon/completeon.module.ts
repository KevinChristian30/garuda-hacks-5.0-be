import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CompleteonController } from './completeon.controller';
import { CompleteonService } from './completeon.service';

@Module({
  imports: [PrismaModule],
  controllers: [CompleteonController],
  providers: [CompleteonService],
})
export class CompleteonModule {}
