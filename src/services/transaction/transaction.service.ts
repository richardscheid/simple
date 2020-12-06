import { ITransaction } from '@interfaces/transaction/transaction.interface'
import TransactionGateway from '@gateways/transaction/transaction.gateway'
import NotificationService from '@services/notification/notification.service'
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
    NotificationService.process(transaction)

    return await TransactionGateway.create(transaction)
  }
}

export default Container.get(TransactionService)
