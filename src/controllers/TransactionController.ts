import { Request, Response } from 'express';
import Transaction from '../models/Transaction';

class TransactionController {
  public async all (req:Request, res:Response): Promise<Response> {
    const user = Transaction.find();

    return res.json(user);
  }
}

export default new TransactionController();
