import { ICategory } from '@domain/category/interfaces/category.interface'

export class CategoryBuilder {
  private readonly _category : ICategory = {} as ICategory;

  name (name: string): CategoryBuilder {
    this._category.name = name
    return this
  }

  build (): ICategory {
    return this._category
  }
}
