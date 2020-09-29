import { Request, Response } from 'express';
import CategoryService from '@services/category.service';

class CategoryController {
  public async all (req: Request, res:Response):Promise<Response> {
    const categories = await CategoryService.findAll();

    return res.json(categories);
  }

  public async create (req:Request, res:Response):Promise<Response> {
    const category = await CategoryService.create(req.body);

    return res.json(category);
  }
}

export default new CategoryController();
