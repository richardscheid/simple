import { Router } from 'express'

import AlertsController from '@controllers/alerts/alerts.controller'
import AuthController from '@controllers/auth/auth.controller'

class AlertsRoutes {

  public routes = Router()

  constructor () {
    this.router()
  }

  router (): void {
    this.routes.get('/', AuthController.authenticate, AlertsController.all)
  }
}

export default new AlertsRoutes().routes
