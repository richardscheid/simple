import asyncHandler from 'express-async-handler'
import { celebrate, Segments, Joi } from 'celebrate'
import { Router } from 'express'

import CategoryController from '@controllers/category/category.controller'
import AuthController from '@controllers/auth/auth.controller'

class CategoryRoutes {

  public routes = Router();

  constructor () {
    this.router()
  }

  router ():void {
    this.routes.get('/', AuthController.authenticate, asyncHandler(CategoryController.findAll))

    this.routes.get('/:id/details', celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required()
      })
    }), AuthController.authenticate, asyncHandler(CategoryController.findById))

    this.routes.post('/', AuthController.authenticate, asyncHandler(CategoryController.create))
  }
}

export default new CategoryRoutes().routes
