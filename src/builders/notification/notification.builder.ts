import { IAlert } from '@interfaces/alert/alert.interface'
import { INotification } from '@interfaces/notification/notification.interface'
import { ITransaction } from '@interfaces/transaction/transaction.interface'

export class NotificationBuilder {
  private readonly _alerts: INotification = {} as INotification;

  name (name: string): NotificationBuilder {
    this._alerts.name = name
    return this
  }

  target (target: number): NotificationBuilder {
    this._alerts.target = target
    return this
  }

  amount (amount: number): NotificationBuilder {
    this._alerts.amount = amount
    return this
  }

  status (status: number): NotificationBuilder {
    this._alerts.status = status
    return this
  }

  condition (condition: number): NotificationBuilder {
    this._alerts.condition = condition
    return this
  }

  alert (alert: IAlert): NotificationBuilder {
    this._alerts.alert = alert
    return this
  }

  transaction (transaction: ITransaction): NotificationBuilder {
    this._alerts.transaction = transaction
    return this
  }

  build (): INotification {
    return this._alerts
  }
}
