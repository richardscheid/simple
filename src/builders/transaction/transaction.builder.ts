import { IUser } from '@interfaces/user/user.interface'
import { ICategory } from '@interfaces/category/category.interface'
import { ITransaction, Items } from '@interfaces/transaction/transaction.interface'

export class TransactionBuilder {
  private readonly _transaction: ITransaction = {} as ITransaction;

  identifier (identifier: string): TransactionBuilder {
    this._transaction.identifier = identifier
    return this
  }

  image (image: string): TransactionBuilder {
    this._transaction.image = image
    return this
  }

  status (status: number): TransactionBuilder {
    this._transaction.status = status
    return this
  }

  total (total: number): TransactionBuilder {
    this._transaction.total = total
    return this
  }

  coo (coo: number): TransactionBuilder {
    this._transaction.coo = coo
    return this
  }

  date (date: Date): TransactionBuilder {
    this._transaction.date = date
    return this
  }

  texts (texts: [string]): TransactionBuilder {
    this._transaction.texts = texts
    return this
  }

  items (items: [Items]): TransactionBuilder {
    this._transaction.items = items
    return this
  }

  user (user: IUser): TransactionBuilder {
    this._transaction.user = user
    return this
  }

  category (category: ICategory): TransactionBuilder {
    this._transaction.category = category
    return this
  }

  build () : ITransaction {
    return this._transaction
  }
}
