import { ICategory } from '@domain/category/interfaces/category.interface'

export interface CategoryRepository {

  findAll (): Promise<ICategory[]>

  findById (_id: string): Promise<ICategory | null>

  findOne (name: string): Promise<ICategory | null>

  create (category: ICategory): Promise<ICategory>
}
