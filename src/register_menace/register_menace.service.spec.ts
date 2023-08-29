import { Test, TestingModule } from '@nestjs/testing';
import { RegisterMenaceService } from './register_menace.service';

describe('RegisterMenaceService', () => {
  let service: RegisterMenaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterMenaceService],
    }).compile();

    service = module.get<RegisterMenaceService>(RegisterMenaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
