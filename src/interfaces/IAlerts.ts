import { Document } from 'mongoose';
import { ICategory } from './ICategory';

export interface IAlerts extends Document {
  name: string,
  target: number,
  amount: number,
  status: number,
  condition: number,
  category?: ICategory
}
