import { Request, Response } from 'express';
import User from '../database/schemas/User';

class UserController {
  public async all (req: Request, res:Response):Promise<Response> {
    const users = await User.find();

    return res.json(users);
  }
}

export default new UserController();
