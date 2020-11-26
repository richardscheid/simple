import { IUser, IAccount } from '@interfaces/user/user.interface'
import { IBank } from '../../interfaces/bank/bank.interface'

export class UserBuilder {
  private readonly _user: IUser = {} as IUser;

  email (email: string): UserBuilder {
    this._user.email = email
    return this
  }

  username (username: string): UserBuilder {
    this._user.username = username
    return this
  }

  password (password: string): UserBuilder {
    this._user.password = password
    return this
  }

  document (document: string): UserBuilder {
    this._user.document = document
    return this
  }

  account (account: IAccount, bank: IBank): UserBuilder {
    account.bank = bank
    this._user.account = account
    return this
  }

  build () : IUser {
    return this._user
  }
}
