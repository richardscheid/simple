import { Document } from 'mongoose';

export interface ITransaction extends Document {
  place: string,
  amount: number,
  status: number
}

export enum Status {
  Onalert,
  Verified,
  Unverified,
}
