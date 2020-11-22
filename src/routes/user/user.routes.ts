import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'
import asyncHandler from 'express-async-handler'

import AuthController from '@controllers/auth/auth.controller'
import UserController from '@controllers/user/user.controller'

class UserRoutes {

  public routes = Router()

  constructor () {
    this.router()
  }

  router (): void {
    this.routes.get('/', AuthController.authenticate, UserController.all)

    this.routes.get('/:id/details',
      celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().required()
        })
      }),
      AuthController.authenticate,
      asyncHandler(UserController.findById))

    this.routes.post('/',
      celebrate({
        [Segments.BODY]: Joi.object().keys({
          username: Joi.string().required(),
          email: Joi.string().required()
        })
      }),
      AuthController.authenticate,
      asyncHandler(UserController.create))
  }
}

export default new UserRoutes().routes
