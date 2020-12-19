import { Document } from 'mongoose'
import { IAlert } from '../alert/alert.interface'
import { ITransaction } from '../transaction/transaction.interface'

export interface INotification extends Document {
  _id: string,
  name: string,
  target: number,
  value: number,
  status: number,
  condition: number,
  alert: IAlert,
  transaction: ITransaction
}
