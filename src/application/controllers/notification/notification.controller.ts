import NotificationService from 'domain/notification/notification.service'
import { Request, Response } from 'express'
import Container, { Service } from 'typedi'

@Service()
class NotificationController {

  async findAll (req: Request, res: Response): Promise<Response> {
    const notifications = await NotificationService.findAll()

    return res.json(notifications)
  }
}

export default Container.get(NotificationController)
