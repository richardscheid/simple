import { INotificationRepository } from '@domain/notification/notification.repository'
import { INotification } from 'domain/notification/interfaces/notification.interface'
import { IUser } from '@domain/user/interfaces/user.interface'
import Notification from '@domain/notification/entities/notification'
import Container, { Service } from 'typedi'

@Service()
class NotificationRepositoryDb implements INotificationRepository {

  async findAll (): Promise<INotification[]> {
    return await Notification.find().populate('transaction')
  }

  async create (notification: INotification): Promise<INotification> {
    return await Notification.create(notification)
  }

  async findByUserId (userid: string): Promise<INotification[]> {
    const filter = <IUser>{ _id: userid }
    return await Notification.find({ user: filter }).populate('transaction')
  }
}

export default Container.get(NotificationRepositoryDb)
