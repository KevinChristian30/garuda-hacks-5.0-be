import { Prisma } from '@prisma/client';
import { v4 } from 'uuid';
import { UnitQuestionImageCreateRequestDTO } from '../dtos/unit-question-image-create-request.dto';

export default class UnitQuestionImageMapper {
  static unitQuestionImageCreateRequestDTOToUnitQuestionImageCreateInput(
    dto: UnitQuestionImageCreateRequestDTO,
    unit: Prisma.unitsCreateNestedOneWithoutUnitquestionImagesInput,
  ): Prisma.unitQuestionImagesCreateInput {
    return {
      secureId: v4(),
      questionAnswer: dto.questionAnswer,
      questionImage: dto.questionImage,
      questionOrder: dto.questionOrder,
      unit: unit,
    };
  }
}
