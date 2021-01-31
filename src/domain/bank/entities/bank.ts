import { Schema, model } from 'mongoose'
import { IBank } from '@domain/bank/interfaces/bank.interface'

const BankSchema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  document: { type: String }
}, {
  timestamps: true
})

export default model<IBank>('Bank', BankSchema, 'banks')
