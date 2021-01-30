import { IBank } from '@domain/bank/interfaces/bank.interface'

export class BankBuilder {
  private readonly _bank : IBank = {} as IBank;

  name (name: string): BankBuilder {
    this._bank.name = name
    return this
  }

  code (code: string): BankBuilder {
    this._bank.code = code
    return this
  }

  document (document: string): BankBuilder {
    this._bank.document = document
    return this
  }

  build (): IBank {
    return this._bank
  }
}
