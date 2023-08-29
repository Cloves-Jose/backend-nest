import { Test, TestingModule } from '@nestjs/testing';
import { RegisterMenaceController } from './register_menace.controller';

describe('RegisterMenaceController', () => {
  let controller: RegisterMenaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterMenaceController],
    }).compile();

    controller = module.get<RegisterMenaceController>(RegisterMenaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
