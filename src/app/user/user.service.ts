import { Injectable } from '@nestjs/common';
import { PaginationParamDTO, PaginationResponseDTO } from 'src/dtos';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRankQueryDTO, UserRankResponseDTO, UserResponseDTO } from './dtos';

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

  async rank(userId: string): Promise<UserRankResponseDTO[]> {
    const users: UserRankQueryDTO[] = await this.prisma.$queryRaw`
      WITH RankedUsers AS (
        SELECT
          users."secureId" as id,
          username,
          mmr,
          cast(RANK() OVER (ORDER BY mmr DESC) as int8) AS rank
        FROM
          users
      )
      SELECT 
        id,
        username,
        mmr,
        rank::varchar
      FROM RankedUsers
      WHERE rank IN (
        (SELECT rank FROM RankedUsers WHERE id = ${userId}) - 1,
        (SELECT rank FROM RankedUsers WHERE id = ${userId}),
        (SELECT rank FROM RankedUsers WHERE id = ${userId}) + 1
      )
      ORDER BY rank;
    `;

    return users.map((user) => ({
      id: user.id,
      mmr: user.mmr,
      username: user.username,
      rank: parseInt(user.rank),
    }));
  }
}
