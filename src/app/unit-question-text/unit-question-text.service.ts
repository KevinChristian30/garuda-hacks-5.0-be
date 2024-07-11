import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UnitQuestionTextService {
  constructor(private prisma: PrismaService) {}
}
