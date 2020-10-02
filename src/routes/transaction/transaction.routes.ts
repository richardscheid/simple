import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import AuthController from '@controllers/auth/auth.controller';
import TransactionController from '@controllers/transaction/transaction.controller';

class TransactionRoutes {
  public routes = Router();

  constructor () {
    this.router();
  }

  router ():void {
    this.routes.get('/', AuthController.authenticate, TransactionController.all);

    this.routes.get('/:id/details', celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required()
      })
    }), AuthController.authenticate, TransactionController.findById);

    this.routes.post('/', celebrate({
      [Segments.HEADERS]: Joi.object({
        user_id: Joi.string().required(),
        category_name: Joi.string().required()
      }).unknown(),
      [Segments.BODY]: Joi.object().keys({
        place: Joi.string().required(),
        order: Joi.number().integer().required(),
        amount: Joi.number().positive().required(),
        company: Joi.string().required(),
        items: Joi.array().min(1).items(
          Joi.object({
            name: Joi.string().required(),
            price: Joi.number().positive().required()
          })
        ).required()
      })
    })
    , AuthController.authenticate, TransactionController.create);
  }
}

export default new TransactionRoutes().routes;
