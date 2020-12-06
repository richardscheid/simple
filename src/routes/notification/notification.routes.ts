import asyncHandler from 'express-async-handler'
import { Router } from 'express'

import NotificationController from '@controllers/notification/notification.controller'
import AuthController from '@controllers/auth/auth.controller'

class NotificationRoutes {

  public routes = Router()

  constructor () {
    this.router()
  }

  router (): void {
    this.routes.get('/', AuthController.authenticate, asyncHandler(NotificationController.findAll))
  }
}

export default new NotificationRoutes().routes
