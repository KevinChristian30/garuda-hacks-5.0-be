import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './app/auth/auth.module';
import { UserModule } from './app/user/user.module';
import { UnitModule } from './app/unit/unit.module';
import { QueueModule } from './app/queue/queue.module';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from './config/jwtConfig';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ScheduleModule } from '@nestjs/schedule';
import { GameModule } from './app/game/game.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, UnitModule, QueueModule, GameModule, JwtModule.register(jwtConfig), ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client'),
  }), ScheduleModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule { }
