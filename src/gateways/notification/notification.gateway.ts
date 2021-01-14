import Container, { Service } from 'typedi'
import { INotification } from '@interfaces/notification/notification.interface'
import { INotificationGateway } from './notification.gateway.interface'
import Notification from '@models/notification/notification'

@Service()
class NotificationGateway implements INotificationGateway {

  async findAll (): Promise<INotification[]> {
    return await Notification.find()
  }

  async create (notification: INotification): Promise<INotification> {
    return await Notification.create(notification)
  }

  async getNotificationById (_id: string): Promise<INotification | null> {
    return await Notification.findById(_id)
  }
}

export default Container.get(NotificationGateway)
