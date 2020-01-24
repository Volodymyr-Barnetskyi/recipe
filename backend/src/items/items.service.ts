import { Injectable } from '@nestjs/common';
import { ItemInterface } from '../interfaces/item.interface';
import { InjectModel } from '@nestjs/mongoose';
import Model from 'mongoose';
@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private readonly itemModel: Model<ItemInterface>,
  ) {}
  async findAll(): Promise<ItemInterface[]> {
    return await this.itemModel.find().exec();
  }
  async findOne(id): Promise<ItemInterface> {
    return await this.itemModel.findOne({ _id: id });
  }
  async create(item: ItemInterface): Promise<ItemInterface> {
    const newItem = new this.itemModel(item);
    return newItem.save();
  }
  async delete(id: string): Promise<ItemInterface> {
    return await this.itemModel.findByIdAndRemove(id);
  }
  async update(id: string, item: ItemInterface): Promise<ItemInterface> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
