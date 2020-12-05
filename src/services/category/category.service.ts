import { ICategory } from '@interfaces/category/category.interface'
import CategoryGateway from '@gateways/category/category.gateway'
import Container, { Service } from 'typedi'

@Service()
class CategoryService {

  async findAll (): Promise<ICategory[]> {
    return await CategoryGateway.findAll()
  }

  async findById (_id: string) {
    return await CategoryGateway.findById(_id)
  }

  async findOne (name: string) {
    return await CategoryGateway.findOne(name)
  }

  async create (category: ICategory): Promise<ICategory> {
    return await CategoryGateway.create(category)
  }
}

export default Container.get(CategoryService)
