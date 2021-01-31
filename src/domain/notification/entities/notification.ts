import { Schema, model } from 'mongoose'
import { INotification } from '@domain/notification/interfaces/notification.interface'

const NotificationSchema = new Schema({
  name: { type: String, required: true },
  target: { type: Number, required: true },
  value: { type: Number, required: true },
  status: { type: Number, required: true },
  condition: { type: Number, required: true },
  alert: {
    type: Schema.Types.ObjectId,
    ref: 'Alert',
    required: true
  },
  transaction: {
    type: Schema.Types.ObjectId,
    ref: 'Transaction',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

export default model<INotification>('Notification', NotificationSchema, 'notifications')
