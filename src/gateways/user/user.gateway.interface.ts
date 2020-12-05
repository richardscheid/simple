import { IUser } from '@interfaces/user/user.interface'

export interface IUserGateway {

  getUsers (): Promise<IUser[]>

  getUserById (_id: string): Promise<IUser | null>

  getUserByEmail (email: string, callback?): Promise<IUser | null>

  create (user: IUser): Promise<IUser>
}
