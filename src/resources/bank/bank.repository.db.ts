import { IBankRepository } from '@domain/bank/bank.repository'
import { IBank } from '@domain/bank/interfaces/bank.interface'
import Bank from '@domain/bank/entities/bank'
import Container, { Service } from 'typedi'

Service()
class BankRepositoryDb implements IBankRepository {

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

export default Container.get(BankRepositoryDb)
