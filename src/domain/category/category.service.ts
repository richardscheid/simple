import CategoryRepositoryDb from '@resources/category/category.repository.db'
import { ICategory } from '@domain/category/interfaces/category.interface'
import Container, { Service } from 'typedi'

@Service()
class CategoryService {

  async findAll (): Promise<ICategory[]> {
    return await CategoryRepositoryDb.findAll()
  }

  async findById (_id: string) {
    return await CategoryRepositoryDb.findById(_id)
  }

  async findOne (name: string) {
    return await CategoryRepositoryDb.findOne(name)
  }

  async create (category: ICategory): Promise<ICategory> {
    return await CategoryRepositoryDb.create(category)
  }
}

export default Container.get(CategoryService)
