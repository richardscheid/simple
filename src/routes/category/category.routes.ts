import { Router } from 'express'
import asyncHandler from 'express-async-handler'

import CategoryController from '@controllers/category/category.controller'
import AuthController from '@controllers/auth/auth.controller'

class CategoryRoutes {
  public routes = Router();

  constructor () {
    this.router()
  }

  router ():void {
    this.routes.get('/', AuthController.authenticate, asyncHandler(CategoryController.all))
    this.routes.post('/', AuthController.authenticate, asyncHandler(CategoryController.create))
  }
}

export default new CategoryRoutes().routes
