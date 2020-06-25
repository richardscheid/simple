import { Schema, model } from 'mongoose';
import { ICategory } from '@interfaces/ICategory';

const CategorySchema = new Schema({
  name: { type: String, required: true }
}, {
  timestamps: true
});

export default model<ICategory>('Category', CategorySchema);
