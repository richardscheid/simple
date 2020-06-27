import { Request, Response } from 'express';
import { ICategory } from '../interfaces/category.interface';

import Category from '../models/Category';
import UserService from '../services/user.service';
import AlertsService from '../services/alerts.service';
import TransactionFactory from '../factory/transaction.factory';
import TransactionService from '../services/transaction.service';

class TransactionController {
  public async all (req:Request, res:Response): Promise<Response> {
    const transactions = await TransactionService.findAll();

    return res.json(transactions);
  }

  public async create (req:Request, res:Response): Promise<Response> {
    const { amount, place, order, company, items } = req.body;
    const { user_id, category_name } = req.headers;

    const user = await UserService.findById(user_id as string);
    if (!user) return res.status(400).json({ error: 'User does not exists!' });

    const category = await Category.findOne(<ICategory>{ name: category_name }).lean();
    if (!category) return res.status(400).json({ error: 'Category does not exists!' });

    const trn = TransactionFactory.build(amount, place, order, company, items, user, category);

    const transaction = await TransactionService.create(trn);

    AlertsService.process(transaction);

    return res.json(transaction);
  }
}

export default new TransactionController();
