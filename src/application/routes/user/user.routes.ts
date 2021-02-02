import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'
import asyncHandler from 'express-async-handler'

import AuthController from '@controllers/auth/auth.controller'
import UserController from '@controllers/user/user.controller'
import Container, { Service } from 'typedi'

@Service()
class UserRoutes {

  public routes = Router()

  constructor () {
    this.router()
  }

  router (): void {
    this.routes.get('/', AuthController.authenticate, asyncHandler(UserController.findAll))

    this.routes.get('/:id/transactions',
      AuthController.authenticate,
      celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().required()
        })
      }),
      asyncHandler(UserController.findTransactionByUserId))

    this.routes.get('/:id/notifications',
      AuthController.authenticate,
      celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().required()
        })
      }),
      asyncHandler(UserController.findNotificationByUserId))

    this.routes.get('/:id/details',
      AuthController.authenticate,
      celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().required()
        })
      }),
      asyncHandler(UserController.findById))

    this.routes.post('/',
      celebrate({
        [Segments.HEADERS]: Joi.object({
          bank_id: Joi.string()
        }).unknown(),
        [Segments.BODY]: Joi.object().keys({
          email: Joi.string().required(),
          name: Joi.string().required(),
          password: Joi.string().required(),
          document: Joi.string(),
          identifier: Joi.string(),
          agency: Joi.string()
        })
      }),
      asyncHandler(UserController.create))
  }
}

export default Container.get(UserRoutes).routes
