import asyncHandler from 'express-async-handler'
import { celebrate, Segments, Joi } from 'celebrate'
import { Router } from 'express'

import AlertController from '@controllers/alert/alert.controller'
import AuthController from '@controllers/auth/auth.controller'
import Container, { Service } from 'typedi'

@Service()
class AlertRoutes {

  public routes = Router()

  constructor () {
    this.router()
  }

  router (): void {
    this.routes.get('/', AuthController.authenticate, asyncHandler(AlertController.findAll))

    this.routes.post('/',
      AuthController.authenticate,
      celebrate({
        [Segments.HEADERS]: Joi.object({
          category_id: Joi.string().required()
        }).unknown(),
        [Segments.BODY]: Joi.object().keys({
          name: Joi.string().required(),
          target: Joi.number().positive().required(),
          condition: Joi.number().integer().min(0).max(4).required()
        })
      }),
      asyncHandler(AlertController.create))
  }
}

export default Container.get(AlertRoutes).routes
