import { ITransaction } from '@interfaces/transaction/transaction.interface'
import Transaction from '@models/transaction/transaction'

class TransactionService {

  async findAll () {
    return await Transaction.find()
  }

  async findById (_id: string) {
    return await Transaction.findById(<ITransaction>{ _id })
  }

  async create (transaction: ITransaction) {
    return await Transaction.create(transaction)
  }
}

export default new TransactionService()
