import { Schema, Document, model } from 'mongoose';

interface TransactionInterface extends Document {
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
  }
}, {
  timestamps: true
});

export default model<TransactionInterface>('Transaction', TransactionSchema);
