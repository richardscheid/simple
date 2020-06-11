import { Document } from 'mongoose';

export interface ITransaction extends Document {
  _id: number,
  place: string,
  order: string,
  amount: number,
  status: number
}

export enum Status {
  Unverified,
  Onalert,
  Verified
}
