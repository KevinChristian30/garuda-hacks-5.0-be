import { Injectable } from '@nestjs/common';
import { UnitCreateRequestDTO, UnitUpdateRequestDTO } from './dtos';
import { PrismaService } from 'src/prisma/prisma.service';
import UnitMapper from './mapper/unit.mapper';

@Injectable()
export class UnitService {
  constructor(private prisma: PrismaService) {}

  async create(dto: UnitCreateRequestDTO): Promise<void> {
    await this.prisma.units.create({
      data: UnitMapper.unitCreateRequestDTOToUnitCreateInput(dto),
    });
  }

  async update(secureId: string, dto: UnitUpdateRequestDTO): Promise<void> {
    await this.prisma.units.update({
      where: {
        secureId: secureId,
      },
      data: UnitMapper.unitUpdateRequestDTOToUnitUpdateInput(dto),
    });
  }
}
