import { Request, Response } from 'express';
import User from '../models/User';
import Transaction from '../models/Transaction';

class TransactionController {
  public async all (req:Request, res:Response): Promise<Response> {
    const transaction = await Transaction.find();

    return res.json(transaction);
  }

  public async create (req:Request, res:Response): Promise<Response> {
    const { amount, place, status } = req.body;
    const { userid } = req.headers;

    const user = await User.findById(userid);
    if (!user) return res.status(400).json({ error: 'User does not exists!' });

    const transaction = await Transaction.create({
      place,
      amount,
      status,
      user: user._id
    });

    return res.json(transaction);
  }
}

export default new TransactionController();
