import { Schema, model } from 'mongoose'
import { IBank } from '@interfaces/bank/bank.interface'

const BankSchema = new Schema({
  code: { type: Number, required: true },
  name: { type: String, required: true }
}, {
  timestamps: true
})

export default model<IBank>('Bank', BankSchema, 'bank')
