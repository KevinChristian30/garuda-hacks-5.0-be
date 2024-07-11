import { Injectable } from '@nestjs/common';
import { UnitCreateRequestDTO, UnitUpdateRequestDTO } from './dtos';
import { PrismaService } from 'src/prisma/prisma.service';
import UnitMapper from './mapper/unit.mapper';
import { UnitResponseDTO } from './dtos/unit-response.dto';

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

  async listAll(): Promise<UnitResponseDTO[]> {
    const units = await this.prisma.units.findMany();
    return units
      .sort((a, b) => a.unitOrder - b.unitOrder)
      .map((unit) => ({
        id: unit.secureId,
        name: unit.name,
        unitOrder: unit.unitOrder,
      }));
  }

  async delete(secureId: string): Promise<void> {
    await this.prisma.units.delete({
      where: {
        secureId: secureId,
      },
    });
  }
}
