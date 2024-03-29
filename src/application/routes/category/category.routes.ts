import asyncHandler from 'express-async-handler'
import { celebrate, Segments, Joi } from 'celebrate'
import { Router } from 'express'

import CategoryController from '@controllers/category/category.controller'
import AuthController from '@controllers/auth/auth.controller'
import Container, { Service } from 'typedi'

@Service()
class CategoryRoutes {

  public routes = Router()

  constructor () {
    this.router()
  }

  router (): void {
    this.routes.get('/', AuthController.authenticate, asyncHandler(CategoryController.findAll))

    this.routes.get('/:id/details',
      AuthController.authenticate,
      celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().required()
        })
      }),
      asyncHandler(CategoryController.findById))

    this.routes.post('/',
      AuthController.authenticate,
      celebrate({
        [Segments.BODY]: Joi.object().keys({
          name: Joi.string().required()
        })
      }),
      asyncHandler(CategoryController.create))
  }
}

export default Container.get(CategoryRoutes).routes
