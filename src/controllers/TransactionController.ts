import { Request, Response } from 'express';
import { ICategory } from '@interfaces/ICategory';

import User from '@models/User';
import Category from '@models/Category';
import AlertService from '@services/AlertService';
import TransactionFactory from '@factory/TransactionFactory';
import TransactionService from '@services/TransactionService';

class TransactionController {
  public async all (req:Request, res:Response): Promise<Response> {
    const transactions = await TransactionService.findAll();

    return res.json(transactions);
  }

  public async create (req:Request, res:Response): Promise<Response> {
    const { amount, place, order, company, items } = req.body;
    const { user_id, category_name } = req.headers;

    const user = await User.findById(user_id).lean();
    if (!user) return res.status(400).json({ error: 'User does not exists!' });

    const category = await Category.findOne(<ICategory>{ name: category_name }).lean();
    if (!category) return res.status(400).json({ error: 'Category does not exists!' });

    const trn = TransactionFactory.build(amount, place, order, company, items, user, category);

    const transaction = await TransactionService.create(trn);

    AlertService.process(transaction);

    return res.json(transaction);
  }
}

export default new TransactionController();
