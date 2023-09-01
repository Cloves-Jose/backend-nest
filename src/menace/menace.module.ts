import { Module } from '@nestjs/common';
import { MenaceService } from './menace.service';
import { MenaceController } from './menace.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [MenaceService],
  controllers: [MenaceController]
})
export class MenaceModule {}
