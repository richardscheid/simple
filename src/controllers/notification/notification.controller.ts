import { Request, Response } from 'express'
import Notification from '@models/notification/notification'

class AlertController {

  async findAll (req: Request, res: Response): Promise<Response> {
    const notifications = await Notification.find()

    return res.json(notifications)
  }
}

export default new AlertController()
