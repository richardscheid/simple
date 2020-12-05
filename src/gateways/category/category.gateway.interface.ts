import { ICategory } from '@interfaces/category/category.interface'

export interface ICategoryGateway {

  findAll (): Promise<ICategory[]>

  findById (_id: string): Promise<ICategory | null>

  findOne (name: string): Promise<ICategory | null>

  create (category: ICategory): Promise<ICategory>
}
