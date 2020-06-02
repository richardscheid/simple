import { Schema, Document, model } from 'mongoose';

interface ITransaction extends Document {
  place: string,
  amount: number,
  status: boolean
}

const TransactionSchema = new Schema({
  place: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: Number, required: true },
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
