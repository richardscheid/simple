import { Request, Response } from 'express';
import Transaction from '../models/Transaction';

class TransactionController {
  public async all (req:Request, res:Response): Promise<Response> {
    const transaction = await Transaction.find();

    return res.json(transaction);
  }

  public async create (req:Request, res:Response): Promise<Response> {
    const transaction = await Transaction.create(req.body);

    return res.json(transaction);
  }
}

export default new TransactionController();
