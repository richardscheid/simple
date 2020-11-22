import { Router } from 'express'

import AlertController from '@controllers/alert/alert.controller'
import AuthController from '@controllers/auth/auth.controller'

class AlertRoutes {

  public routes = Router();

  constructor () {
    this.router()
  }

  router (): void {
    this.routes.get('/', AuthController.authenticate, AlertController.all)
    this.routes.post('/', AuthController.authenticate, AlertController.create)
  }
}

export default new AlertRoutes().routes
