import { Schema, model } from 'mongoose';
import { ITransaction } from '../interfaces/transaction.interface';

const TransactionSchema = new Schema({
  place: { type: String, required: true },
  order: { type: Number, required: true },
  amount: { type: Number, required: true },
  status: { type: Number, required: true },
  company: { type: String, required: true },
  items: [{
    name: { type: String },
    price: { type: Number }
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
}, {
  timestamps: true
});

export default model<ITransaction>('Transaction', TransactionSchema);
