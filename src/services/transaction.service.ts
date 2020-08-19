import Transaction from '@models/Transaction';
import { ITransaction } from '@interfaces/transaction.interface';

class TransactionService {
  async findAll () {
    return await Transaction.find();
  }

  async findOne (place:string) {
    return await Transaction.findOne(<ITransaction>{ place });
  }

  async create (transaction:ITransaction) {
    return await Transaction.create(transaction);
  }
}

export default new TransactionService();
