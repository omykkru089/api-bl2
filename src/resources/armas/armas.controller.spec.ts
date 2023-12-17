import { Test, TestingModule } from '@nestjs/testing';
import { ArmasController } from './armas.controller';
import { ArmasService } from './armas.service';

describe('ArmasController', () => {
  let controller: ArmasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArmasController],
      providers: [ArmasService],
    }).compile();

    controller = module.get<ArmasController>(ArmasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
