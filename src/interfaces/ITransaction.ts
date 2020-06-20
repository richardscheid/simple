import { Document } from 'mongoose';
import { ICategory } from './ICategory';

export interface ITransaction extends Document {
  _id: string,
  place: string,
  order: string,
  amount: number,
  status: number,
  company: string
  items: [{
    name: string,
    price: number
  }],
  category?: ICategory
}

export enum Status {
  Unverified,
  Onalert,
  Verified
}
