import { Document } from 'mongoose';
import { IAlert } from './alert.interface';
import { ITransaction } from './transaction.interface';

export interface IAlerts extends Document {
  _id: number,
  name: string,
  target: number,
  amount: number,
  status: number,
  condition: number,
  alert: IAlert,
  transaction: ITransaction
}
