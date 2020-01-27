import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemObject } from '../dto/create-item.dto';
import { ItemInterface } from '../interfaces/item.interface';
import { ItemInput } from './items.input';

@Resolver()

export class ItemsResolver {
  constructor(private readonly itemService: ItemsService) {}
  @Query(() => [ItemObject])
  async full(): Promise<ItemInterface[]> {
    return await this.itemService.findAll();
  }
  @Mutation(() => ItemObject)
  async create(@Args('input') input: ItemInput): Promise<ItemInterface> {
    return await this.itemService.create(input);
  }
  @Mutation(() => ItemObject)
  async updateItem(@Args('id') id: string, @Args('input') input: ItemInput) {
    return await this.itemService.update(id, input);
  }
  @Mutation(() => ItemObject)
  async deleteItem(@Args('id') id: string) {
    return await this.itemService.delete(id);
  }
}
