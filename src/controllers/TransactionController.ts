import { Request, Response } from 'express';

import User from '../models/User';
import Transaction from '../models/Transaction';
import Category, { ICategory } from '../models/Category';

class TransactionController {
  public async all (req:Request, res:Response): Promise<Response> {
    const transaction = await Transaction.find();

    return res.json(transaction);
  }

  public async create (req:Request, res:Response): Promise<Response> {
    const { amount, place, status } = req.body;
    const { user_id, category_name } = req.headers;

    const user = await User.findById(user_id).lean();
    if (!user) return res.status(400).json({ error: 'User does not exists!' });

    const category = await Category.findOne(<ICategory>{ name: category_name }).lean();
    if (!category) return res.status(400).json({ error: 'Category does not exists!' });

    const transaction = await Transaction.create({
      place,
      amount,
      status,
      user: user._id,
      category: category._id
    });

    return res.json(transaction);
  }
}

export default new TransactionController();
