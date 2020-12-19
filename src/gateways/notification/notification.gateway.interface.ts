import { INotification } from '../../interfaces/notification/notification.interface'

export interface INotificationGateway {

  findAll (): Promise<INotification[]>

  create (notification: INotification): Promise<INotification>
}