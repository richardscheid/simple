import bcrypt from 'bcrypt'
import { Schema, model } from 'mongoose'
import { IUser } from '@interfaces/user/user.interface'

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true, index: true, lowercase: true },
  username: { type: String, required: true, index: true },
  password: { type: String }
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
  return bcrypt.compareSync(candidatePassword, this.password)
}

UserSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password
    return ret
  }
})

export default model<IUser>('User', UserSchema)
