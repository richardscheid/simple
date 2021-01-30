import { ICategory } from '@domain/category/interfaces/category.interface'
import { IUser } from '@domain/user/interfaces/user.interface'
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
