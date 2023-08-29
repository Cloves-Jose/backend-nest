import { Module } from '@nestjs/common';
import { MenaceService } from './menace.service';
import { MenaceController } from './menace.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MenaceService],
  controllers: [MenaceController]
})
export class MenaceModule {}
