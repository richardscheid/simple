import User from '@models/user/user'
import { IUser } from '@interfaces/user/user.interface'

class UserService {

  async findAll (): Promise<IUser[]> {
    return await User.find()
  }

  async findById (_id: string) {
    return await User.findById(<IUser>{ _id })
  }

  async findOne (email: string, callback?) {
    return await User.findOne(<IUser>{ email: email.toLowerCase() }, callback)
  }

  async create (user: IUser): Promise<IUser> {
    return await User.create(user)
  }
}

export default new UserService()
