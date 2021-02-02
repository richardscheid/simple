import { Document } from 'mongoose'
import { IBank } from '@domain/bank/interfaces/bank.interface'

export interface IUser extends Document {
  email: string,
  name: string,
  password: string,
  document: string,
  identifier: string,
  agency: string,
  bank: IBank
  validatePassword (candidatePassword:string): boolean
}
