import { Schema, model } from 'mongoose'
import { ITransaction } from '@domain/transaction/interfaces/transaction.interface'

const TransactionSchema = new Schema({
  identifier: { type: String, required: true },
  image: { type: String, required: false },
  status: { type: Number, required: true },
  total: { type: Number, required: true },
  coo: { type: Number, required: true },
  date: { type: Date, required: true },
  texts: [{
    type: String,
    required: true
  }],
  items: [{
    name: { type: String },
    value: { type: Number },
    unit: { type: Number }
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: false
  }
}, {
  timestamps: true
})

TransactionSchema.virtual('image_url').get(function () {
  return `${process.env.URL}/files/${this.image}`
})

export default model<ITransaction>('Transaction', TransactionSchema)
