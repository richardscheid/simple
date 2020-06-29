import { IAlert } from '../interfaces/alert.interface';
import { ICategory } from '../interfaces/category.interface';

export class AlertBuilder {
  private readonly _alert : IAlert;

  constructor () {
    this._alert = { name: '', target: 0, condition: 0 };
  }

  name (name:string): AlertBuilder {
    this._alert.name = name;
    return this;
  }

  target (target:number): AlertBuilder {
    this._alert.target = target;
    return this;
  }

  condition (condition:number): AlertBuilder {
    this._alert.condition = condition;
    return this;
  }

  cagetory (category:ICategory | null): AlertBuilder {
    if (category) this._alert.category = category;
    return this;
  }

  build (): IAlert {
    return this._alert;
  }
}
