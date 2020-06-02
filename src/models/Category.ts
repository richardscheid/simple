import { Schema, Document, model } from 'mongoose';

interface CategoryInterface extends Document {
  name: string
}

const CategorySchema = new Schema({
  name: { type: String, required: true }
}, {
  timestamps: true
});

export default model<CategoryInterface>('Category', CategorySchema);
