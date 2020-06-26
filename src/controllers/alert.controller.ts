import { Request, Response } from 'express';
import Alert from '../models/Alert';
import Category from '../models/Category';
import { ICategory } from '../interfaces/category.interface';

class AlertController {
  public async all (req: Request, res:Response):Promise<Response> {
    const alerts = await Alert.find();

    return res.json(alerts);
  }

  public async create (req:Request, res:Response):Promise<Response> {
    const { name, target, condition } = req.body;
    const { category_id } = req.headers;

    let category : ICategory;
    if (category_id) {
      category = await Category.findById(category_id);
      if (!category) return res.status(400).json({ error: 'Category does not exists!' });
    }

    const alert = await Alert.create({
      name,
      target,
      condition,
      category: category._id
    });

    return res.json(alert);
  }
}

export default new AlertController();
