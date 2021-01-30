import { ITransaction } from '@domain/transaction/interfaces/transaction.interface'

export interface ITransactionRepository {

  findAll (): Promise<ITransaction[]>

  findById (_id: string): Promise<ITransaction | null>

  findByUserId (_id: string): Promise<ITransaction[] | null>

  findByIdAndUpdate (filter: ITransaction, update: ITransaction)

  create (transaction: ITransaction): Promise<ITransaction>
}
