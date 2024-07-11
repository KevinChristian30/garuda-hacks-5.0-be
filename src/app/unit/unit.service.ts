import { Injectable } from '@nestjs/common';
import {
  UnitCreateRequestDTO,
  UnitQuestionImageResponseDTO,
  UnitQuestionResponseDTO,
  UnitQuestionTextResponseDTO,
  UnitResponseDTO,
  UnitUpdateRequestDTO,
} from './dtos';
import { PrismaService } from 'src/prisma/prisma.service';
import UnitMapper from './mapper/unit.mapper';

@Injectable()
export class UnitService {
  constructor(private prisma: PrismaService) {}

  async create(dto: UnitCreateRequestDTO): Promise<void> {
    await this.prisma.unit.create({
      data: UnitMapper.unitCreateRequestDTOToUnitCreateInput(dto),
    });
  }

  async update(secureId: string, dto: UnitUpdateRequestDTO): Promise<void> {
    await this.prisma.unit.update({
      where: {
        secureId: secureId,
      },
      data: UnitMapper.unitUpdateRequestDTOToUnitUpdateInput(dto),
    });
  }

  async listAll(): Promise<UnitResponseDTO[]> {
    const units = await this.prisma.unit.findMany();
    return units
      .sort((a, b) => a.unitOrder - b.unitOrder)
      .map((unit) => ({
        id: unit.secureId,
        name: unit.name,
        unitOrder: unit.unitOrder,
      }));
  }

  async listQuestions(secureId: string): Promise<UnitQuestionResponseDTO[]> {
    const unit = await this.prisma.unit.findFirstOrThrow({
      where: {
        secureId: secureId,
      },
      include: {
        unitQuestionImages: true,
        unitQuestionTexts: true,
      },
    });

    const unitQuestionImages: UnitQuestionImageResponseDTO[] =
      unit.unitQuestionImages.map((question) => ({
        id: question.secureId,
        type: 'IMAGE',
        questionOrder: question.questionOrder,
        questionAnswer: question.questionAnswer,
        questionImage: question.questionImage,
      }));

    const unitQuestionTexts: UnitQuestionTextResponseDTO[] =
      unit.unitQuestionTexts.map((question) => ({
        id: question.secureId,
        type: 'TEXT',
        questionOrder: question.questionOrder,
        questionText: question.questionText,
      }));

    return [...unitQuestionImages, ...unitQuestionTexts].sort(
      (a, b) => a.questionOrder - b.questionOrder,
    );
  }

  async delete(secureId: string): Promise<void> {
    await this.prisma.unit.delete({
      where: {
        secureId: secureId,
      },
    });
  }
}
