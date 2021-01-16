import { ICategory } from '@interfaces/category/category.interface'
import { ICategoryGateway } from './category.gateway.interface'
import Container, { Service } from 'typedi'
import Category from '@models/category/category'

@Service()
class CategoryGateway implements ICategoryGateway {

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

export default Container.get(CategoryGateway)
