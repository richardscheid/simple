import { Schema, model } from 'mongoose';

const AlertSchema = new Schema({
  name: { type: String, required: true },
  condition: { type: Number, required: true }
}, {
  timestamps: true
});

export default model('Alert', AlertSchema);
