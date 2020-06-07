import Alert from '../models/Alert';
import { IAlert, Conditions } from '../interfaces/IAlert';
import { ITransaction } from '../interfaces/ITransaction';

class AlertService {
  public process (transaction: ITransaction): void {
    const alerts = Alert.find().lean();

    const amount = transaction.amount;

    for (const alert of alerts) {
      const cond = alert.conditions;

      if (cond === Conditions.greaterThan) {
        if (amount > alert.target) {

        }
      } else if (cond === Conditions.equalsTo) {
        if (amount === alert.target) {

        }
      } else if (cond === Conditions.lessThan) {
        if (amount < alert.target) {

        }
      }
    }
  }
}

export default new AlertService();
