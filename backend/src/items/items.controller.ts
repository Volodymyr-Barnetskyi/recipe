import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemInterface } from '../interfaces/item.interface';
import { ItemObject } from '../dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @Get()
  async findAll(): Promise<ItemInterface[]> {
    return await this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.itemService.findOne(id);
  }
  @Post()
  create(@Body() itemInput): Promise<ItemInterface> {
    return this.itemService.create(itemInput);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<ItemInterface> {
    return this.itemService.delete(id);
  }
  @Put(':id')
  update(
    @Body() updateItemDto: ItemObject,
    @Param('id') id,
  ): Promise<ItemInterface> {
    return this.itemService.update(id, updateItemDto);
  }
}
