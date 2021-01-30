import { INotification } from '@domain/notification/interfaces/notification.interface'

export interface INotificationRepository {

  findAll (): Promise<INotification[]>

  create (notification: INotification): Promise<INotification>

  findByUserId (userid: string): Promise<INotification[]>

}
