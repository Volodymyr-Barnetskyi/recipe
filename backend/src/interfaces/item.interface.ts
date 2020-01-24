import { Document } from 'mongoose';
export interface ItemInterface extends Document {
  readonly title: string;
  readonly description: string;
  readonly ingredients: string[];
}
