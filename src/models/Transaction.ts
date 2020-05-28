import { Schema, Document, model } from 'mongoose';

interface TransactionInterface extends Document {
  amount: number,
  place: string,
  status?: boolean
}

const TransactionSchema = new Schema({
  amount: { type: Number, required: true },
  place: { type: String, required: true },
  status: { type: Boolean, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

export default model<TransactionInterface>('User', TransactionSchema);
