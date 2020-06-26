import { Schema, model } from 'mongoose';
import { IAlerts } from '../interfaces/alerts.interface';

const AlertsSchema = new Schema({
  name: { type: String, required: true },
  target: { type: Number, required: true },
  amount: { type: Number, required: true },
  status: { type: Number, required: true },
  condition: { type: Number, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: false
  },
  alert: {
    type: Schema.Types.ObjectId,
    ref: 'Alert',
    required: true
  },
  transaction: {
    type: Schema.Types.ObjectId,
    ref: 'Transaction',
    required: true
  }
}, {
  timestamps: true
});

export default model<IAlerts>('Alerts', AlertsSchema, 'alerts');
