import { Document } from 'mongoose';

export interface IAlert extends Document {
  name: string,
  target: number,
  condition: number
}

export enum Condition {
  greaterThan,
  equalsTo,
  lessThan
}
