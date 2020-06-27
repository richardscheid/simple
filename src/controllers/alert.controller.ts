import { Request, Response } from 'express';
import { AlertBuilder } from '../builder/alert.builder';
import { ICategory } from '../interfaces/category.interface';

import Alert from '../models/Alert';
import CategoryService from '../services/category.service';

class AlertController {
  public async all (req: Request, res:Response):Promise<Response> {
    const alerts = await Alert.find();

    return res.json(alerts);
  }

  public async create (req:Request, res:Response):Promise<Response> {
    const { name, target, condition } = req.body;
    const { category_id } = req.headers;

    let category : ICategory | null;
    if (category_id) {
      category = await CategoryService.findById(category_id as string);
      if (!category) return res.status(400).json({ error: 'Category does not exists!' });
    }

    const alert = await Alert.create(new AlertBuilder()
      .name(name)
      .target(target)
      .condition(condition)
      .cagetory(category)
      .build());

    return res.json(alert);
  }
}

export default new AlertController();
