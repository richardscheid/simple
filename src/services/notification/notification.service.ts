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

    const amount = transaction.amount
    const notifyId : string[] = []

    for (const notify of alerts) {
      const onAlert: boolean = this.verify(amount, notify.target, notify.condition)

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
      .amount(transaction.amount)
      .condition(alert.condition)
      .status(Status.Onalert)
      .alert(alert)
      .transaction(transaction)
      .build()
    )
  }

  public verify (amount: number, target: number, condition: number): boolean {
    switch (condition) {
      case Conditions.GreaterThan:
        return amount > target

      case Conditions.GreaterThanEquals:
        return amount >= target

      case Conditions.EqualsTo:
        return amount === target

      case Conditions.LessThanEquals:
        return amount <= target

      case Conditions.LessThan:
        return amount < target
    }

    return false
  }
}

export default Container.get(NotificationService)
