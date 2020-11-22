import asyncHandler from 'express-async-handler'
import { Router } from 'express'

import AlertsController from '@controllers/alerts/alerts.controller'
import AuthController from '@controllers/auth/auth.controller'

class AlertsRoutes {

  public routes = Router()

  constructor () {
    this.router()
  }

  router (): void {
    this.routes.get('/', AuthController.authenticate, asyncHandler(AlertsController.findAll))
  }
}

export default new AlertsRoutes().routes
