import { Document } from 'mongoose'

export interface IBank extends Document {
  code: string,
  name: string
}
