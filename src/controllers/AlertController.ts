import { Request, Response } from 'express';
import Alert from '../models/Alert';

class AlertController {
  public async all (req: Request, res:Response):Promise<Response> {
    const alerts = await Alert.find();

    return res.json(alerts);
  }

  public async create (req:Request, res:Response):Promise<Response> {
    const alert = await Alert.create(req.body);

    return res.json(alert);
  }
}

export default new AlertController();
