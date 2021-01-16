import { Document } from 'mongoose'
import { ITransaction } from '../transaction/transaction.interface'
import { IAlert } from '../alert/alert.interface'
import { IUser } from '../user/user.interface'

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
