import { Router } from 'express';

import AuthController from '@controllers/auth/auth.controller';
import TransactionController from '@controllers/transaction/transaction.controller';

class TransactionRoutes {
  public routes = Router();

  constructor () {
    this.router();
  }

  router ():void {
    this.routes.get('/', AuthController.authenticate, TransactionController.all);
    this.routes.post('/', AuthController.authenticate, TransactionController.create);
  }
}

export default new TransactionRoutes().routes;
