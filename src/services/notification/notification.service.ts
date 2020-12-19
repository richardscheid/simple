import { ITransaction, Status } from '@interfaces/transaction/transaction.interface'
import { Conditions, IAlert } from '@interfaces/alert/alert.interface'
import { NotificationBuilder } from '@builders/notification/notification.builder'
import { INotification } from '@interfaces/notification/notification.interface'

import NotificationGateway from '@gateways/notification/notification.gateway'
import TransactionGateway from '@gateways/transaction/transaction.gateway'
import Container, { Service } from 'typedi'
import Alert from '@models/alert/alert'

@Service()
class NotificationService {

  async process (transaction: ITransaction): Promise<void> {
    const alerts = await Alert.find().populate('category')

    const value = transaction.total
    const notifyId : string[] = []

    for (const notify of alerts) {
      const onAlert: boolean = this.verify(value, notify.target, notify.condition)

      if (onAlert) {
        const result = this.create(notify, transaction)

        if (result) notifyId.push((await result)._id)
      }
    }

    if (notifyId) this.update(transaction)
  }

  async update (transaction: ITransaction): Promise<void> {
    const filter = <ITransaction>{ _id: transaction._id }
    const update = <ITransaction>{ status: Status.Onalert }

    await TransactionGateway.findByIdAndUpdate(filter, update)
  }

  async create (alert: IAlert, transaction: ITransaction): Promise<INotification> {
    return await NotificationGateway.create(new NotificationBuilder()
      .name(alert.name)
      .target(alert.target)
      .value(transaction.total)
      .condition(alert.condition)
      .status(Status.Onalert)
      .alert(alert)
      .transaction(transaction)
      .build()
    )
  }

  public verify (value: number, target: number, condition: number): boolean {
    switch (condition) {
      case Conditions.GreaterThan:
        return value > target

      case Conditions.GreaterThanEquals:
        return value >= target

      case Conditions.EqualsTo:
        return value === target

      case Conditions.LessThanEquals:
        return value <= target

      case Conditions.LessThan:
        return value < target
    }

    return false
  }
}

export default Container.get(NotificationService)
