import bcrypt from 'bcrypt';
import mongoose, { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true, index: true, lowercase: true },
  username: { type: String, required: true, index: true },
  password: { type: String },
  tokens: { type: Array }
}, {
  timestamps: true
});

UserSchema.pre('save', function save (next) {
  const user = this as IUser;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, undefined, (err: mongoose.Error, hash) => {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

const comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {
    callback(err, isMatch);
  });
};

UserSchema.methods.comparePassword = comparePassword;

export default model<IUser>('User', UserSchema);
