import Category from '@models/category/category';
import { ICategory } from '@interfaces/category/category.interface';

class CategoryService {
  async findAll ():Promise<ICategory[]> {
    return await Category.find();
  }

  async findById (id:string):Promise<ICategory | null> {
    return await Category.findById(id);
  }

  async findOne (name:string): Promise<ICategory | null> {
    return await Category.findOne(<ICategory>{ name });
  }

  async create (category:ICategory): Promise<ICategory> {
    return await Category.create(category);
  }
}

export default new CategoryService();
