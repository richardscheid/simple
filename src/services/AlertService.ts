import Alert from '../models/Alert';
import { IAlert, Condition } from '../interfaces/IAlert';
import { ITransaction } from '../interfaces/ITransaction';

class AlertService {
  public process (transaction: ITransaction): void {
    const alerts:IAlert[] = Alert.find().lean();

    const amount = transaction.amount;

    for (const alert of alerts) {
      const cond = alert.condition;

      if (cond === Condition.greaterThan) {
        if (amount > alert.target) {

        }
      } else if (cond === Condition.equalsTo) {
        if (amount === alert.target) {

        }
      } else if (cond === Condition.lessThan) {
        if (amount < alert.target) {

        }
      }
    }
  }
}

export default new AlertService();
