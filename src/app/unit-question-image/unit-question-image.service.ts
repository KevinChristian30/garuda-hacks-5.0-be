import { Injectable } from '@nestjs/common';
import { UnitQuestionImageCreateRequestDTO } from './dtos/unit-question-image-create-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import UnitQuestionImageMapper from './mapper/unit-question-image.mapper';

@Injectable()
export class UnitQuestionImageService {
  constructor(private prisma: PrismaService) {}

  async create(dto: UnitQuestionImageCreateRequestDTO): Promise<void> {
    const unit = await this.prisma.units.findFirstOrThrow({
      where: {
        secureId: dto.unitId,
      },
    });

    await this.prisma.unitQuestionImages.create({
      data: UnitQuestionImageMapper.unitQuestionImageCreateRequestDTOToUnitQuestionImageCreateInput(
        dto,
        {
          connect: unit,
        },
      ),
    });
  }
}
