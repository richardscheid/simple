import { ITransaction } from '@interfaces/transaction/transaction.interface'
import { ITransactionGateway } from './transaction.gateway.interface'
import Transaction from '@models/transaction/transaction'
import Container, { Service } from 'typedi'
import { IUser } from '../../interfaces/user/user.interface'

@Service()
class TransactionGateway implements ITransactionGateway {

  async findAll (): Promise<ITransaction[]> {
    return await Transaction.find()
  }

  async findById (_id: string): Promise<ITransaction | null> {
    return await Transaction.findById(<ITransaction>{ _id })
  }

  async findTransactionsByUserId (_id: string): Promise<ITransaction[] | null> {
    const filter = <IUser>{ _id }
    return await Transaction.find({ user: filter })
  }

  async findByIdAndUpdate (filter: ITransaction, update: ITransaction) {
    return await Transaction.findByIdAndUpdate(filter, update)
  }

  async create (transaction: ITransaction): Promise<ITransaction> {
    return await Transaction.create(transaction)
  }
}

export default Container.get(TransactionGateway)
