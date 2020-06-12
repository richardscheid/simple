import { Document } from 'mongoose';
import { ICategory } from './ICategory';

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
