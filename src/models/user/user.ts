import bcrypt from 'bcrypt'
import { Schema, model } from 'mongoose'
import { IUser } from '@interfaces/user/user.interface'

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true, index: true, lowercase: true },
  username: { type: String, required: true, index: true },
  password: { type: String, required: true, minlength: 6, maxlength: 128 },
  document: { type: String },
  identifier: { type: String },
  agency: { type: String },
  bank: {
    type: Schema.Types.ObjectId,
    ref: 'Bank'
  }
}, {
  timestamps: true
})

UserSchema.pre('save', function save (next) {
  const user = this as IUser

  if (!user.isModified('password')) { return next() }

  user.password = bcrypt.hashSync(user.password, 10)
  next()
})

UserSchema.methods.validatePassword = function (candidatePassword: string) : boolean {
  const user = this as IUser
  return bcrypt.compareSync(candidatePassword, user.password)
}

UserSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password
    return ret
  }
})

export default model<IUser>('User', UserSchema)
