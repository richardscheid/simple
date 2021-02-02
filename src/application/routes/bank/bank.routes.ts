import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'
import asyncHandler from 'express-async-handler'

import AuthController from '@controllers/auth/auth.controller'
import BankController from '@controllers/bank/bank.controller'
import Container, { Service } from 'typedi'

@Service()
class BankRoutes {

  public routes = Router()

  constructor () {
    this.router()
  }

  router (): void {
    this.routes.get('/', AuthController.authenticate, asyncHandler(BankController.findAll))

    this.routes.get('/:code/details',
      AuthController.authenticate,
      celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          code: Joi.string().required()
        })
      }),
      asyncHandler(BankController.findByCode))

    this.routes.post('/',
      AuthController.authenticate,
      celebrate({
        [Segments.BODY]: Joi.array().items({
          code: Joi.string().required(),
          name: Joi.string().required(),
          document: Joi.string()
        })
      }),
      asyncHandler(BankController.create))
  }
}

export default Container.get(BankRoutes).routes
