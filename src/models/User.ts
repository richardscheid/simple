import { Schema, Document, model } from 'mongoose';

interface IUser extends Document {
  name?: string,
  email?: string
}

const UserSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
}, {
  timestamps: true
});

export default model<IUser>('User', UserSchema);
