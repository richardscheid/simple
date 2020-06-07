import { Document } from 'mongoose';

export interface IAlert extends Document {
  _id: number,
  name: string,
  target: number,
  condition: number
}

export enum Conditions {
  greaterThan,
  equalsTo,
  lessThan
}
