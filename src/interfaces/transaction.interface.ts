import { Document } from 'mongoose';
import { IUser } from './user.interface';
import { ICategory } from './category.interface';

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
  user: IUser,
  category: ICategory
}

export enum Status {
  Unverified,
  Onalert,
  Verified
}
