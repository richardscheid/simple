import { ITransaction } from '@domain/transaction/interfaces/transaction.interface'
import TransactionGateway from '@resources/transaction/transaction.repository.db'
import NotificationService from '@domain/notification/notification.service'
import Container, { Service } from 'typedi'

@Service()
class TransactionService {

  async findAll (): Promise<ITransaction[]> {
    return await TransactionGateway.findAll()
  }

  async findById (_id: string): Promise<ITransaction | null> {
    return await TransactionGateway.findById(_id)
  }

  async create (transaction: ITransaction) {
    const response = await TransactionGateway.create(transaction)

    await NotificationService.process(response)

    return response
  }

  async upload (filename: string, transaction: ITransaction): Promise<ITransaction> {
    transaction.image = filename
    return await TransactionGateway.upload(transaction)
  }
}

export default Container.get(TransactionService)
