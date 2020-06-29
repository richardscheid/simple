import { Document } from 'mongoose';
import { ICategory } from './category.interface';

export interface IAlertDocument extends Document {
  name: string,
  target: number,
  condition: number,
  category?: ICategory
}

export interface IAlert {
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
