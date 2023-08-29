import { Module } from '@nestjs/common';
import { RegisterMenaceService } from './register_menace.service';
import { RegisterMenaceController } from './register_menace.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [RegisterMenaceService],
  controllers: [RegisterMenaceController]
})
export class RegisterMenaceModule {}
