import { Schema, Document, model } from 'mongoose';

interface IUser extends Document {
  name?: string,
  email?: string
}

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true, index: true, lowercase: true },
  username: { type: String, required: true, index: true },
  password: { type: String }
}, {
  timestamps: true
});

export default model<IUser>('User', UserSchema);
