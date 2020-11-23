import Bank from '@models/bank/bank'
import { IBank } from '../../interfaces/bank/bank.interface'

class BankService {

  async findAll (): Promise<IBank[]> {
    return await Bank.find()
  }

  async findByCode (code: string) {
    return await Bank.findById(<IBank>{ code })
  }

  async create (bank: IBank): Promise<IBank> {
    return await Bank.create(bank)
  }
}

export default new BankService()
