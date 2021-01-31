import { ICategory } from '@domain/category/interfaces/category.interface'
import { CategoryRepository } from '@domain/category/category.repository'
import Category from '@domain/category/entities/category'
import Container, { Service } from 'typedi'

@Service()
class CategoryRepositoryDb implements CategoryRepository {

  async findAll (): Promise<ICategory[]> {
    return await Category.find()
  }

  async findById (_id: string): Promise<ICategory | null> {
    return await Category.findById({ _id })
  }

  async findOne (name: string): Promise<ICategory | null> {
    return await Category.findOne({ name })
  }

  async create (category: ICategory): Promise<ICategory> {
    return await Category.create(category)
  }
}

export default Container.get(CategoryRepositoryDb)
