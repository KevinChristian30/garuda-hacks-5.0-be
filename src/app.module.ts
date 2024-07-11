import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './app/auth/auth.module';
import { UserModule } from './app/user/user.module';
import { UnitModule } from './app/unit/unit.module';
import { UnitQuestionImageModule } from './app/unit-question-image/unit-question-image.module';
import { UnitQuestionTextModule } from './app/unit-question-text/unit-question-text.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    UnitModule,
    UnitQuestionImageModule,
    UnitQuestionTextModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
