import { Document } from 'mongoose'
import { IBank } from '../bank/bank.interface'

export interface IUser extends Document {
  email: string,
  username: string,
  password: string,
  document: string,
  identifier: string,
  agency: string,
  bank: IBank
  validatePassword (candidatePassword:string): boolean
}
