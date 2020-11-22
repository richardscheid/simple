import { ICategory } from '../category/category.interface'
import { IUser } from '../user/user.interface'
import { Document } from 'mongoose'

export interface ITransaction extends Document {
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
