import { IAlert } from '@domain/alert/interfaces/alert.interface'
import { Schema, model } from 'mongoose'

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
})

export default model<IAlert>('Alert', AlertSchema, 'alert')
