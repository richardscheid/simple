import { ICategory } from '@domain/category/interfaces/category.interface'
import { IAlert } from '@domain/alert/interfaces/alert.interface'

export class AlertBuilder {
  private readonly _alert : IAlert = {} as IAlert;

  name (name:string): AlertBuilder {
    this._alert.name = name
    return this
  }

  target (target:number): AlertBuilder {
    this._alert.target = target
    return this
  }

  condition (condition:number): AlertBuilder {
    this._alert.condition = condition
    return this
  }

  category (category:ICategory | null): AlertBuilder {
    if (category) this._alert.category = category
    return this
  }

  build (): IAlert {
    return this._alert
  }
}
