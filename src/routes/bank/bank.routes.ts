import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'
import asyncHandler from 'express-async-handler'

import AuthController from '@controllers/auth/auth.controller'
import BankController from '@controllers/bank/bank.controller'

class BankRoutes {

  public routes = Router()

  constructor () {
    this.router()
  }

  router (): void {
    this.routes.get('/', AuthController.authenticate, asyncHandler(BankController.findAll))

    this.routes.get('/:code/details',
      celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          code: Joi.string().required()
        })
      }),
      AuthController.authenticate,
      asyncHandler(BankController.findByCode))

    this.routes.post('/',
      celebrate({
        [Segments.BODY]: Joi.object().keys({
          code: Joi.number().integer().positive().required(),
          name: Joi.string().required()
        })
      }),
      AuthController.authenticate,
      asyncHandler(BankController.create))
  }
}

export default new BankRoutes().routes
