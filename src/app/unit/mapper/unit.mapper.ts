import { Prisma } from '@prisma/client';
import { v4 } from 'uuid';
import { UnitCreateRequestDTO, UnitUpdateRequestDTO } from '../dtos';

export default class UnitMapper {
  static unitCreateRequestDTOToUnitCreateInput(
    dto: UnitCreateRequestDTO,
  ): Prisma.unitsCreateInput {
    return {
      name: dto.name,
      secureId: v4(),
      unitOrder: dto.unitOrder,
    };
  }

  static unitUpdateRequestDTOToUnitUpdateInput(
    dto: UnitUpdateRequestDTO,
  ): Prisma.unitsUpdateInput {
    return {
      name: dto.name,
      unitOrder: dto.unitOrder,
    };
  }
}
