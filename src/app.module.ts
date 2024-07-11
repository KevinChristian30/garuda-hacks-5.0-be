import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './app/auth/auth.module';
import { UserModule } from './app/user/user.module';
import { UnitModule } from './app/unit/unit.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, UnitModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
