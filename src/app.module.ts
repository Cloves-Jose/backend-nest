import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RegisterMenaceModule } from './register_menace/register_menace.module';
import { MenaceModule } from './menace/menace.module';

@Module({
  imports: [UserModule, AuthModule, RegisterMenaceModule, MenaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
