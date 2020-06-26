import { Request, Response } from 'express';
import Category from '../models/Category';

class CategoryController {
  public async all (req: Request, res:Response):Promise<Response> {
    const categories = await Category.find();

    return res.json(categories);
  }

  public async create (req:Request, res:Response):Promise<Response> {
    const category = await Category.create(req.body);

    return res.json(category);
  }
}

export default new CategoryController();
