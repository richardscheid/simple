import { Schema, model } from 'mongoose';
import { ITransaction } from '../interfaces/ITransaction';

const TransactionSchema = new Schema({
  place: { type: String, required: true },
  order: { type: Number, required: true },
  amount: { type: Number, required: true },
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
