import { ITransaction } from '@domain/transaction/interfaces/transaction.interface'
import { ITransactionRepository } from '@domain/transaction/transaction.repository'
import Transaction from '@domain/transaction/entities/transaction'
import { IUser } from '@domain/user/interfaces/user.interface'
import Container, { Service } from 'typedi'

@Service()
class TransactionRepositoryDb implements ITransactionRepository {

  async findAll (): Promise<ITransaction[]> {
    return await Transaction.find()
  }

  async findById (_id: string): Promise<ITransaction | null> {
    return await Transaction.findById(<ITransaction>{ _id })
  }

  async findByUserId (_id: string): Promise<ITransaction[] | null> {
    const filter = <IUser>{ _id }
    return await Transaction.find({ user: filter })
  }

  async findByIdAndUpdate (filter: ITransaction, update: ITransaction) {
    return await Transaction.findByIdAndUpdate(filter, update)
  }

  async create (transaction: ITransaction): Promise<ITransaction> {
    return await Transaction.create(transaction)
  }

  async upload (transaction: ITransaction): Promise<ITransaction> {
    const filter = { _id: transaction._id }
    return await Transaction.updateOne(filter, transaction)
  }
}

export default Container.get(TransactionRepositoryDb)
