import Transaction from '../models/Transaction';
import { Status, ITransaction } from '../interfaces/transaction.interface';

class TransactionFactory {
  public build (amount, place, order, company, items, user, category): ITransaction {
    const trn = new Transaction();
    trn.place = place;
    trn.order = order;
    trn.items = items;
    trn.amount = amount;
    trn.company = company;
    trn.user = user._id;
    trn.category = category._id;
    trn.status = Status.Unverified;
    return trn;
  }
}

export default new TransactionFactory();
