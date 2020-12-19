import { IAlert } from '@interfaces/alert/alert.interface'
import { INotification } from '@interfaces/notification/notification.interface'
import { ITransaction } from '@interfaces/transaction/transaction.interface'

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

  amount (amount: number): NotificationBuilder {
    this._notifications.amount = amount
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

  build (): INotification {
    return this._notifications
  }
}