import Alert from '../models/Alert';
import { Conditions } from '../interfaces/IAlert';
import { ITransaction } from '../interfaces/ITransaction';

class AlertService {
  async process (transaction: ITransaction): Promise<void> {
    const alerts = await Alert.find();

    const amount = transaction.amount;

    for (const alert of alerts) {
      const cond = alert.condition;

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
