import asyncHandler from 'express-async-handler'
import { Router } from 'express'

import AlertController from '@controllers/alert/alert.controller'
import AuthController from '@controllers/auth/auth.controller'

class AlertRoutes {

  public routes = Router();

  constructor () {
    this.router()
  }

  router (): void {
    this.routes.get('/', AuthController.authenticate, AlertController.findAll)
    this.routes.post('/', AuthController.authenticate, asyncHandler(AlertController.create))
  }
}

export default new AlertRoutes().routes
