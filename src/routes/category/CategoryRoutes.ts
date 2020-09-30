import { Router } from 'express';

import AuthController from '@controllers/auth/auth.controller';
import CategoryController from '@controllers/category/category.controller';

class CategoryRoutes {
  public routes = Router();

  constructor () {
    this.router();
  }

  router ():void {
    this.routes.get('/', AuthController.authenticate, CategoryController.all);
    this.routes.post('/', AuthController.authenticate, CategoryController.create);
  }
}

export default new CategoryRoutes().routes;
