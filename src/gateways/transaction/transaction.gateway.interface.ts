import { ITransaction } from '@interfaces/transaction/transaction.interface'

export interface ITransactionGateway {

  findAll (): Promise<ITransaction[]>

  findById (_id: string): Promise<ITransaction | null>

  create (transaction: ITransaction): Promise<ITransaction>
}