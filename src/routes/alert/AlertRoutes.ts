import { Router } from 'express';

import AuthController from '@controllers/auth/auth.controller';
import AlertController from '@controllers/alert/alert.controller';

class AlertRoutes {
  public routes = Router();

  constructor () {
    this.router();
  }

  router ():void {
    this.routes.get('/', AuthController.authenticate, AlertController.all);
    this.routes.post('/', AuthController.authenticate, AlertController.create);
  }
}

export default new AlertRoutes().routes;
