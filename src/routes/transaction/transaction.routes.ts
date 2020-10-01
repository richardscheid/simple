import { Router } from 'express';

import AuthController from '@controllers/auth/auth.controller';
import TransactionController from '@controllers/transaction/transaction.controller';
import { celebrate, Segments, Joi } from 'celebrate';

class TransactionRoutes {
  public routes = Router();

  constructor () {
    this.router();
  }

  router ():void {
    this.routes.get('/', AuthController.authenticate, TransactionController.all);

    this.routes.post('/', celebrate({
      [Segments.HEADERS]: Joi.object({
        user_id: Joi.string().required(),
        category_name: Joi.string().required()
      }).unknown(),
      [Segments.BODY]: Joi.object().keys({
        place: Joi.string().required(),
        order: Joi.number().integer().required(),
        amount: Joi.number().required(),
        company: Joi.string().required(),
        items: Joi.array().required()
      })
    })
    , AuthController.authenticate, TransactionController.create);
  }
}

export default new TransactionRoutes().routes;
