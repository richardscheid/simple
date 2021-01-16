import asyncHandler from 'express-async-handler'
import { celebrate, Segments, Joi } from 'celebrate'
import { Router } from 'express'

import NotificationController from '@controllers/notification/notification.controller'
import AuthController from '@controllers/auth/auth.controller'
import Container, { Service } from 'typedi'

@Service()
class NotificationRoutes {

  public routes = Router()

  constructor () {
    this.router()
  }

  router (): void {
    this.routes.get('/', AuthController.authenticate, asyncHandler(NotificationController.findAll))

    this.routes.get('/:userid/details',
      AuthController.authenticate,
      celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          userid: Joi.string().required()
        })
      }),
      asyncHandler(NotificationController.findById))
  }
}

export default Container.get(NotificationRoutes).routes
