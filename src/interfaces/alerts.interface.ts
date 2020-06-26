import { Document } from 'mongoose';
import { ICategory } from './category.interface';

export interface IAlerts extends Document {
  _id: number,
  name: string,
  target: number,
  amount: number,
  status: number,
  condition: number,
  category?: ICategory
}
