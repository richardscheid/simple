import { Schema, model } from 'mongoose';
import { IAlertDocument } from '../interfaces/alert.interface';

const AlertSchema = new Schema({
  name: { type: String, required: true },
  target: { type: Number, required: true },
  condition: { type: Number, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: false
  }
}, {
  timestamps: true
});

export default model<IAlertDocument>('Alert', AlertSchema, 'alert');
