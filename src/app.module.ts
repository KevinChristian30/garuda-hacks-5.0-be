import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './app/auth/auth.module';
import { UserModule } from './app/user/user.module';
import { UnitModule } from './app/unit/unit.module';
import { UnitQuestionImageModule } from './app/unit-question-image/unit-question-image.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    UnitModule,
    UnitQuestionImageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
