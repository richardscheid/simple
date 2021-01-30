import { IUserRepository } from '@domain/user/user.repository'
import { IUser } from '@domain/user/interfaces/user.interface'
import User from '@domain/user/entities/user'
import Container, { Service } from 'typedi'

@Service()
class UserRepositoryDb implements IUserRepository {

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

export default Container.get(UserRepositoryDb)
