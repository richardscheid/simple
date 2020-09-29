import { Document } from 'mongoose';
import { IUser } from '../user/user.interface';
import { ICategory } from '../category/category.interface';

export interface ITransaction extends Document {
  _id: string,
  place: string,
  order: string,
  amount: number,
  status: number,
  company: string
  items: [Items],
  user: IUser,
  category: ICategory
}

export interface Items {
  name: string,
  price: number
}

export enum Status {
  Unverified,
  Onalert,
  Verified
}
