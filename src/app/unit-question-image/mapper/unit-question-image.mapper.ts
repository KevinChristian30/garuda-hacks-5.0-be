import { Prisma } from '@prisma/client';
import { v4 } from 'uuid';
import {
  UnitQuestionImageCreateRequestDTO,
  UnitQuestionImageUpdateRequestDTO,
} from '../dtos';

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

  static unitQuestionImageUpdateRequestDTOToUnitQuestionImageUpdateInput(
    dto: UnitQuestionImageUpdateRequestDTO,
  ): Prisma.unitQuestionImagesUpdateInput {
    return {
      questionAnswer: dto.questionAnswer,
      questionImage: dto.questionImage,
      questionOrder: dto.questionOrder,
    };
  }
}
