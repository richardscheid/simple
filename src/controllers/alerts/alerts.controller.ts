import { Request, Response } from 'express'
import Alerts from '@models/alerts/Alerts'

class AlertController {
  async findAll (req: Request, res: Response): Promise<Response> {
    const alerts = await Alerts.find()

    return res.json(alerts)
  }
}

export default new AlertController()
