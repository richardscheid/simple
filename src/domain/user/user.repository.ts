import { IUser } from '@domain/user/interfaces/user.interface'

export interface IUserRepository {

  getUsers (): Promise<IUser[]>

  getUserById (_id: string): Promise<IUser | null>

  getUserByEmail (email: string, callback?): Promise<IUser | null>

  create (user: IUser): Promise<IUser>
}
