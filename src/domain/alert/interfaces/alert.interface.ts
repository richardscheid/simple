import { ICategory } from '@domain/category/interfaces/category.interface'
import { Document } from 'mongoose'

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
