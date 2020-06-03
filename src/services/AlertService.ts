import Alert from '../models/Alert';
import { ITransaction } from '../interfaces/ITransaction';

class AlertService {
  public process (transaction: ITransaction): void {
    console.log(transaction);
  }
}

export default new AlertService();
