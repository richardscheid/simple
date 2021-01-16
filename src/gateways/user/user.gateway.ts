import User from '@models/user/user'

import { IUserGateway } from './user.gateway.interface'
import { IUser } from '@interfaces/user/user.interface'
import Container, { Service } from 'typedi'

@Service()
class UserGateway implements IUserGateway {

  async getUsers (): Promise<IUser[]> {
    return await User.find()
  }

  async getUserById (_id: string): Promise<IUser | null> {
    return await User.findById(<IUser>{ _id })
  }

  async getUserByEmail (email: string, callback?): Promise<IUser | null> {
    const filter = { email: email.toLowerCase() }
    return await User.findOne(filter, callback)
  }

  async create (user: IUser): Promise<IUser> {
    return await User.create(user)
  }
}

export default Container.get(UserGateway)
