import { ITransaction, Status } from '@interfaces/transaction/transaction.interface'
import { Conditions, IAlert } from '@interfaces/alert/alert.interface'
import { AlertsBuilder } from '@builders/alerts/alerts.builder'
import { IAlerts } from '@interfaces/alerts/alerts.interface'

import Transaction from '@models/transaction/transaction'
import Alerts from '@models/alerts/Alerts'
import Alert from '@models/alert/alert'

class AlertService {

  async process (transaction: ITransaction): Promise<void> {
    const alerts = await Alert.find().populate('category')

    const amount = transaction.amount
    const alertsId : string[] = []

    for (const alert of alerts) {
      const onAlert: boolean = this.verify(amount, alert.target, alert.condition)

      if (onAlert) {
        const result = this.create(alert, transaction)

        if (result) alertsId.push((await result)._id)
      }
    }

    if (alertsId) this.update(transaction)
  }

  async update (transaction: ITransaction): Promise<void> {
    const filter = <ITransaction>{ _id: transaction._id }
    const update = <ITransaction>{ status: Status.Onalert }

    await Transaction.findByIdAndUpdate(filter, update)
  }

  async create (alert: IAlert, transaction: ITransaction): Promise<IAlerts> {
    return await Alerts.create(new AlertsBuilder()
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

export default new AlertService()
