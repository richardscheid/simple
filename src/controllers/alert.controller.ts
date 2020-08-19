import { Request, Response } from 'express';
import { AlertBuilder } from '@builders/alert.builder';
import { ICategory } from '@interfaces/category.interface';

import Alert from '@models/Alert';
import CategoryService from '@services/category.service';

class AlertController {
  public async all (req: Request, res: Response):Promise<Response> {
    const alerts = await Alert.find();

    return res.json(alerts);
  }

  public async create (req:Request, res:Response):Promise<Response> {
    const { name, target, condition } = req.body;
    const { category_id } = req.headers;

    const category = await this.findCategory(String(category_id));

    if (!category) return res.status(400).json({ error: 'Category does not exists!' });

    const alert = await Alert.create(
      new AlertBuilder()
        .name(name)
        .target(target)
        .condition(condition)
        .cagetory(category)
        .build());

    return res.json(alert);
  }

  private async findCategory (id: string):Promise<ICategory | null> {
    return await CategoryService.findById(id);
  }
}

export default new AlertController();
