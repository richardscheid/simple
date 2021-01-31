import { Document } from 'mongoose'
import { ITransaction } from '@domain/transaction/interfaces/transaction.interface'
import { IAlert } from '@domain/alert/interfaces/alert.interface'
import { IUser } from '@domain/user/interfaces/user.interface'

export interface INotification extends Document {
  _id: string,
  name: string,
  target: number,
  value: number,
  status: number,
  condition: number,
  transaction: ITransaction
  alert: IAlert,
  user: IUser
}
