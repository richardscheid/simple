import { Request, Response } from 'express';
import { ICategory } from '../interfaces/category.interface';

import Category from '../models/Category';
import UserService from '../services/user.service';
import AlertsService from '../services/alerts.service';
import TransactionService from '../services/transaction.service';
import { TransactionBuilder } from '../builder/transaction.builder';
import { Status } from '../interfaces/transaction.interface';

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

    const category = await Category.findOne(<ICategory>{ name: category_name });
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
