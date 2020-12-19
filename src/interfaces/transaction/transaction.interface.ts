import { ICategory } from '../category/category.interface'
import { IUser } from '../user/user.interface'
import { Document } from 'mongoose'

export interface ITransaction extends Document {
  identifier: string
  image: string,
  status: number,
  total: number,
  coo: number,
  date: Date,
  texts: [string]
  items: [Items],
  user: IUser,
  category: ICategory
}

export interface Items {
  name: string,
  value: number,
  unit: number
}

export enum Status {
  Unverified,
  Onalert,
  Verified
}
