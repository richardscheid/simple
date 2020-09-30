import { Router } from 'express';

import AuthController from '@controllers/auth/auth.controller';
import AlertsController from '@controllers/alerts/alerts.controller';

class AlertsRoutes {
  public routes = Router();

  constructor () {
    this.router();
  }

  router ():void {
    this.routes.get('/', AuthController.authenticate, AlertsController.all);
  }
}

export default new AlertsRoutes().routes;
