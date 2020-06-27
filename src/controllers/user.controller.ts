import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  public async all (req: Request, res:Response):Promise<Response> {
    const users = await UserService.findAll();

    return res.json(users);
  }

  public async create (req:Request, res:Response): Promise<Response> {
    const user = await UserService.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
