import { ITransaction } from '@interfaces/transaction/transaction.interface'
import TransactionGateway from '@gateways/transaction/transaction.gateway'
import NotificationService from '@services/notification/notification.service'
import Container, { Service } from 'typedi'
import multer from 'multer'

const upload = multer({ dest: 'uploads/' })

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

    upload.single(transaction.image)

    await NotificationService.process(response)

    return response
  }
}

export default Container.get(TransactionService)
