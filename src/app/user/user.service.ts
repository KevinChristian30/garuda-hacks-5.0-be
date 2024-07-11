import { Injectable } from '@nestjs/common';
import { PaginationParamDTO, PaginationResponseDTO } from 'src/dtos';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserResponseDTO } from './dtos';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUserByUsername(username: string) {
    return await this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });
  }

  async list(
    paginationParams: PaginationParamDTO,
  ): Promise<PaginationResponseDTO<UserResponseDTO>> {
    const [users, total] = await Promise.all([
      this.prisma.user.findMany(paginationParams.toPrismaFindManyArgs()),
      this.prisma.user.count(),
    ]);

    return {
      data: users.map((user) => ({
        id: user.secureId,
        mmr: user.mmr,
        username: user.username,
      })),
      total: total,
    };
  }
}
