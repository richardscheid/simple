import { Schema, model } from 'mongoose';
import { IUser } from '@interfaces/IUser';

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true, index: true, lowercase: true },
  username: { type: String, required: true, index: true },
  password: { type: String }
}, {
  timestamps: true
});

export default model<IUser>('User', UserSchema);
