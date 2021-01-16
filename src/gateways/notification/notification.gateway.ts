import Container, { Service } from 'typedi'
import { INotification } from '@interfaces/notification/notification.interface'
import { INotificationGateway } from './notification.gateway.interface'
import Notification from '@models/notification/notification'
import { IUser } from '@interfaces/user/user.interface'

@Service()
class NotificationGateway implements INotificationGateway {

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

export default Container.get(NotificationGateway)
