import { Request, Response } from 'express';
import { ICategory } from '../interfaces/ICategory';
import { Status } from '../interfaces/ITransaction';
import User from '../models/User';
import Category from '../models/Category';
import Transaction from '../models/Transaction';
import AlertService from '../services/AlertService';

class TransactionController {
  public async all (req:Request, res:Response): Promise<Response> {
    const transaction = await Transaction.find();

    return res.json(transaction);
  }

  public async create (req:Request, res:Response): Promise<Response> {
    const { amount, place, order } = req.body;
    const { user_id, category_name } = req.headers;

    const user = await User.findById(user_id).lean();
    if (!user) return res.status(400).json({ error: 'User does not exists!' });

    const category = await Category.findOne(<ICategory>{ name: category_name }).lean();
    if (!category) return res.status(400).json({ error: 'Category does not exists!' });

    const transaction = await Transaction.create({
      place,
      order,
      amount,
      status: Status.Unverified,
      user: user._id,
      category: category._id
    });

    AlertService.process(transaction);

    return res.json(transaction);
  }
}

export default new TransactionController();
