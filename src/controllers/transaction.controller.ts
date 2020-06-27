import { Request, Response } from 'express';
import { Status } from '../interfaces/transaction.interface';
import { TransactionBuilder } from '../builder/transaction.builder';

import UserService from '../services/user.service';
import AlertsService from '../services/alerts.service';
import CategoryService from '../services/category.service';
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

    const category = await CategoryService.findOne(category_name as string);
    if (!category) return res.status(400).json({ error: 'Category does not exists!' });

    const transaction = await TransactionService.create(new TransactionBuilder()
      .place(place)
      .items(items)
      .order(order)
      .amount(amount)
      .company(company)
      .user(user)
      .category(category)
      .status(Status.Unverified)
      .build()
    );

    AlertsService.process(transaction);

    return res.json(transaction);
  }
}

export default new TransactionController();
