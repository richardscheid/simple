import { IBank } from '@interfaces/bank/bank.interface'
import Bank from '@models/bank/bank'

class BankService {

  async findAll (): Promise<IBank[]> {
    return await Bank.find()
  }

  async findById (_id: string) {
    return await Bank.findOne({ _id })
  }

  async findByCode (code: string) {
    return await Bank.findOne({ code })
  }

  create (bank: IBank): Promise<IBank> {
    return Bank.create(bank)
  }
}

export default new BankService()
