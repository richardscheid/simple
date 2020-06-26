import { Schema, model } from 'mongoose';
import { ICategory } from '../interfaces/category.interface';

const CategorySchema = new Schema({
  name: { type: String, required: true }
}, {
  timestamps: true
});

export default model<ICategory>('Category', CategorySchema);
