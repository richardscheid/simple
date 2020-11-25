import { IBank } from '@interfaces/bank/bank.interface'
import Bank from '@models/bank/bank'

class BankService {

  async findAll (): Promise<IBank[]> {
    return await Bank.find()
  }

  async findByCode (code: string) {
    return await Bank.findOne(<IBank>{ code })
  }

  create (bank: IBank): Promise<IBank> {
    return Bank.create(bank)
  }
}

export default new BankService()
