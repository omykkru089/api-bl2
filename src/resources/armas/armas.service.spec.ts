import { Test, TestingModule } from '@nestjs/testing';
import { ArmasService } from './armas.service';

describe('ArmasService', () => {
  let service: ArmasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArmasService],
    }).compile();

    service = module.get<ArmasService>(ArmasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
