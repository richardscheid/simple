import { ICategory } from '@interfaces/category/category.interface'
import Category from '@models/category/category'

class CategoryService {

  async findAll (): Promise<ICategory[]> {
    return await Category.find()
  }

  async findById (_id: string) {
    return await Category.findById(<ICategory>{ _id })
  }

  async findOne (name: string) {
    return await Category.findOne(<ICategory>{ name })
  }

  async create (category: ICategory): Promise<ICategory> {
    return await Category.create(category)
  }
}

export default new CategoryService()
