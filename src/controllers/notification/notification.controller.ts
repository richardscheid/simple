import NotificationService from '@services/notification/notification.service'
import { Request, Response } from 'express'
import Container, { Service } from 'typedi'

@Service()
class NotificationController {

  async findAll (req: Request, res: Response): Promise<Response> {
    const notifications = await NotificationService.findAll()

    return res.json(notifications)
  }

  async findByUserId (req: Request, res: Response): Promise<Response> {
    const { userid } = req.params

    const notifications = await NotificationService.findByUserId(userid)

    return res.json(notifications)
  }
}

export default Container.get(NotificationController)
