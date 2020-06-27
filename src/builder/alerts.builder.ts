import { IAlerts } from '../interfaces/alerts.interface';
import { IAlert } from '../interfaces/alert.interface';
import { ITransaction } from '../interfaces/transaction.interface';

export class AlertsBuilder {
  private readonly _alerts: IAlerts;

  name (name:string): AlertsBuilder {
    this._alerts.name = name;
    return this;
  }

  target (target:number): AlertsBuilder {
    this._alerts.target = target;
    return this;
  }

  amount (amount:number): AlertsBuilder {
    this._alerts.amount = amount;
    return this;
  }

  status (status:number): AlertsBuilder {
    this._alerts.status = status;
    return this;
  }

  condition (condition:number): AlertsBuilder {
    this._alerts.condition = condition;
    return this;
  }

  alert (alert:IAlert): AlertsBuilder {
    this._alerts.alert = alert;
    return this;
  }

  transaction (transaction:ITransaction): AlertsBuilder {
    this._alerts.transaction = transaction;
    return this;
  }

  build ():IAlerts {
    return this._alerts;
  }
}
