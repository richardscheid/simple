import { Document } from 'mongoose';
import { ICategory } from '../category/category.interface';

export interface IAlert extends Document {
  _id: string,
  name: string,
  target: number,
  condition: number,
  category?: ICategory
}

export enum Conditions {
  GreaterThan,
  GreaterThanEquals,
  EqualsTo,
  LessThan,
  LessThanEquals
}
