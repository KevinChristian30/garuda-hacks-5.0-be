import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UnitController } from './unit.controller';
import { UnitService } from './unit.service';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from 'src/config/jwtConfig';

@Module({
  imports: [PrismaModule, JwtModule.register(jwtConfig)],
  controllers: [UnitController],
  providers: [UnitService],
})
export class UnitModule {}
