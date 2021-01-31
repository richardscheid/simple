import { INotification } from '@domain/notification/interfaces/notification.interface'
import { ITransaction } from '@domain/transaction/interfaces/transaction.interface'
import { IAlert } from '@domain/alert/interfaces/alert.interface'
import { IUser } from '@domain/user/interfaces/user.interface'

export class NotificationBuilder {
  private readonly _notifications: INotification = {} as INotification;

  name (name: string): NotificationBuilder {
    this._notifications.name = name
    return this
  }

  target (target: number): NotificationBuilder {
    this._notifications.target = target
    return this
  }

  value (value: number): NotificationBuilder {
    this._notifications.value = value
    return this
  }

  status (status: number): NotificationBuilder {
    this._notifications.status = status
    return this
  }

  condition (condition: number): NotificationBuilder {
    this._notifications.condition = condition
    return this
  }

  alert (alert: IAlert): NotificationBuilder {
    this._notifications.alert = alert
    return this
  }

  transaction (transaction: ITransaction): NotificationBuilder {
    this._notifications.transaction = transaction
    return this
  }

  user (user: IUser): NotificationBuilder {
    this._notifications.user = user
    return this
  }

  build (): INotification {
    return this._notifications
  }
}
