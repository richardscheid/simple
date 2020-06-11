import { Schema, model } from 'mongoose';
import { IAlert } from '../interfaces/IAlert';

const AlertSchema = new Schema({
  name: { type: String, required: true },
  target: { type: Number, required: true },
  condition: { type: Number, required: true }
}, {
  timestamps: true
});

export default model<IAlert>('Alert', AlertSchema, 'alert');
