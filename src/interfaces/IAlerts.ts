import { Document } from 'mongoose';

export interface IAlerts extends Document {
  name: string,
  target: number,
  amount: number,
  status: number,
  condition: number,
}
