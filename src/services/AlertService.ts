import Alert from '../models/Alert';
import Alerts from '../models/Alerts';
import { IAlerts } from '../interfaces/IAlerts';
import { Conditions, IAlert } from '../interfaces/IAlert';
import { ITransaction, Status } from '../interfaces/ITransaction';

class AlertService {
  async process (transaction: ITransaction): Promise<void> {
    const alerts = await Alert.find();

    const amount = transaction.amount;

    for (const alert of alerts) {
      const onAlert: boolean = this.verify(amount, alert.target, alert.condition);

      if (onAlert) this.create(alert, transaction);
    }
  }

  async create (alert: IAlert, transaction: ITransaction):Promise<IAlerts> {
    return await Alerts.create({
      name: alert.name,
      target: alert.target,
      amount: transaction.amount,
      condition: alert.condition,
      alert: alert._id,
      transcation: transaction._id,
      status: Status.Onalert
    });
  }

  public verify (amount: number, target: number, condition: number): boolean {
    switch (condition) {
      case Conditions.GreaterThan:
        return amount > target;

      case Conditions.GreaterThanEquals:
        return amount >= target;

      case Conditions.EqualsTo:
        return amount === target;

      case Conditions.LessThanEquals:
        return amount <= target;

      case Conditions.LessThan:
        return amount < target;
    }

    return false;
  }
}

export default new AlertService();
