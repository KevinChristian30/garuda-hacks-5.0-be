import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './app/auth/auth.module';
import { UserModule } from './app/user/user.module';
import { UnitModule } from './app/unit/unit.module';
import { UnitQuestionImageModule } from './app/unit-question-image/unit-question-image.module';
import { UnitQuestionTextModule } from './app/unit-question-text/unit-question-text.module';
import { CompleteonModule } from './app/completeon/completeon.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    UnitModule,
    UnitQuestionImageModule,
    UnitQuestionTextModule,
    CompleteonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
