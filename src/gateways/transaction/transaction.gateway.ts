import { ITransactionGateway } from './transaction.gateway.interface'
import { ITransaction } from '@interfaces/transaction/transaction.interface'
import Transaction from '@models/transaction/transaction'
import Container, { Service } from 'typedi'

@Service()
class TransactionGateway implements ITransactionGateway {

  async findAll (): Promise<ITransaction[]> {
    return await Transaction.find()
  }

  async findById (_id: string): Promise<ITransaction | null> {
    return await Transaction.findById(<ITransaction>{ _id })
  }

  async findByIdAndUpdate (filter: ITransaction, update: ITransaction) {
    return await Transaction.findByIdAndUpdate(filter, update)
  }

  async create (transaction: ITransaction): Promise<ITransaction> {
    return await Transaction.create(transaction)
  }
}

export default Container.get(TransactionGateway)
