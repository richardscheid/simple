import { IBank } from '../bank/bank.interface'
import { Document } from 'mongoose'

export interface IUser extends Document {
  email: string,
  username: string,
  password: string,
  document: string,
  account: IAccount
  validatePassword (candidatePassword:string): boolean
}

export interface IAccount {
  identifier: string,
  agency: string,
  bank: IBank
}
