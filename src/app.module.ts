import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './app/auth/auth.module';
import { UserModule } from './app/user/user.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
