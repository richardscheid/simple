import { IUser } from '@domain/user/interfaces/user.interface'
import { IBank } from '@domain/bank/interfaces/bank.interface'

export class UserBuilder {

  private readonly _user: IUser = {} as IUser;

  email (email: string): UserBuilder {
    this._user.email = email
    return this
  }

  name (name: string): UserBuilder {
    this._user.name = name
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

  identifier (identifier: string): UserBuilder {
    this._user.identifier = identifier
    return this
  }

  agency (agency: string): UserBuilder {
    this._user.agency = agency
    return this
  }

  bank (bank: IBank): UserBuilder {
    this._user.bank = bank
    return this
  }

  build () : IUser {
    return this._user
  }
}
