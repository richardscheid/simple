import NotificationGateway from '@gateways/notification/notification.gateway'
import NotificationService from '@services/notification/notification.service'
import { Request, Response } from 'express'
import Container, { Service } from 'typedi'

@Service()
class NotificationController {

  async findAll (req: Request, res: Response): Promise<Response> {
    const notifications = await NotificationGateway.findAll()

    return res.json(notifications)
  }

  async findById (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const notifications = await NotificationService.getNotificationById(id)

    return res.json(notifications)
  }
}

export default Container.get(NotificationController)
