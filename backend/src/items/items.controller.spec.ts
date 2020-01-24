import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';

describe('Items Controller', () => {
  let controller: ItemsController;

  beforeEach(async () => {
    imports: [ItemsService];
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
    }).compile();

    controller = module.get<ItemsController>(ItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
