import { Prisma } from '@prisma/client';
import { UnitQuestionTextCreateRequestDTO } from '../dtos';
import { v4 } from 'uuid';

export default class UnitQuestionTextMapper {
  static fromUnitQuestionTextCreateRequestDTOToUnitQuestionTextCreateInput(
    dto: UnitQuestionTextCreateRequestDTO,
    unit: Prisma.UnitCreateNestedOneWithoutUnitQuestionImagesInput,
  ): Prisma.UnitQuestionTextCreateInput {
    return {
      secureId: v4(),
      questionOrder: dto.questionOrder,
      questionText: dto.questionText,
      unit: unit,
    };
  }
}
