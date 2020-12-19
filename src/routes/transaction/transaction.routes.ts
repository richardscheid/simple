import asyncHandler from 'express-async-handler'
import { celebrate, Segments, Joi } from 'celebrate'
import { Router } from 'express'

import TransactionController from '@controllers/transaction/transaction.controller'
import AuthController from '@controllers/auth/auth.controller'
import Container, { Service } from 'typedi'

@Service()
class TransactionRoutes {

  public routes = Router();

  constructor () {
    this.router()
  }

  router (): void {
    this.routes.get('/', AuthController.authenticate, asyncHandler(TransactionController.findAll))

    this.routes.get('/:id/details',
      celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().required()
        })
      }),
      AuthController.authenticate,
      asyncHandler(TransactionController.findById))

    this.routes.post('/',
      celebrate({
        [Segments.HEADERS]: Joi.object({
          user_id: Joi.string().required(),
          category_name: Joi.string()
        }).unknown(),
        [Segments.BODY]: Joi.object().keys({
          identifier: Joi.string().required(),
          image: Joi.string(),
          total: Joi.number().positive().required(),
          coo: Joi.number().integer().required(),
          date: Joi.date().required(),
          texts: Joi.array().min(1).items(Joi.string()).required(),
          items: Joi.array().min(1).items(
            Joi.object({
              name: Joi.string().required(),
              value: Joi.number().positive().required(),
              unit: Joi.number().positive().required()
            })
          ).required()
        })
      }),
      AuthController.authenticate,
      asyncHandler(TransactionController.create))
  }
}

export default Container.get(TransactionRoutes).routes
