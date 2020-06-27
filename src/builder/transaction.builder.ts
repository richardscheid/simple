import { ITransaction, Items } from '../interfaces/transaction.interface';
import { IUser } from '../interfaces/user.interface';
import { ICategory } from '../interfaces/category.interface';

export class TransactionBuilder {
  private readonly _transaction: ITransaction;

  place (place: string): TransactionBuilder {
    this._transaction.place = place;
    return this;
  }

  order (order: string): TransactionBuilder {
    this._transaction.order = order;
    return this;
  }

  items (items: [Items]): TransactionBuilder {
    this._transaction.items = items;
    return this;
  }

  amount (amount: number): TransactionBuilder {
    this._transaction.amount = amount;
    return this;
  }

  company (company: string): TransactionBuilder {
    this._transaction.company = company;
    return this;
  }

  status (status: number): TransactionBuilder {
    this._transaction.status = status;
    return this;
  }

  user (user: IUser): TransactionBuilder {
    this._transaction.user = user;
    return this;
  }

  category (category: ICategory): TransactionBuilder {
    this._transaction.category = category;
    return this;
  }

  build () : ITransaction {
    return this._transaction;
  }
}
