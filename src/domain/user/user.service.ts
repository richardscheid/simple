import { INotification } from '@domain/notification/interfaces/notification.interface'
import { ITransaction } from '@domain/transaction/interfaces/transaction.interface'
import { IUser } from '@domain/user/interfaces/user.interface'
import NotificationGateway from '@resources/notification/notification.repository.db'
import TransactionGateway from '@resources/transaction/transaction.repository.db'
import UserGateway from '@gateways/user/user.gateway'
import Container, { Service } from 'typedi'

@Service()
class UserService {

  async findAll (): Promise<IUser[]> {
    return await UserGateway.getUsers()
  }

  async findById (_id: string): Promise<IUser | null> {
    return await UserGateway.getUserById(_id)
  }

  async findTransactionByUserId (_id: string): Promise<ITransaction[] | null> {
    return await TransactionGateway.findByUserId(_id)
  }

  async findNotificationByUserId (id: string): Promise<INotification[]> {
    return await NotificationGateway.findByUserId(id)
  }

  async findOne (email: string, callback?): Promise<IUser | null> {
    return await UserGateway.getUserByEmail(email, callback)
  }

  async create (user: IUser): Promise<IUser> {
    return await UserGateway.create(user)
  }
}

export default Container.get(UserService)
