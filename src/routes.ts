import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import AuthController from '@controllers/auth/auth.controller';
import UserController from '@controllers/user/user.controller';
import AlertController from '@controllers/alert/alert.controller';
import AlertsController from '@controllers/alerts/alerts.controller';
import CategoryController from '@controllers/category/category.controller';
import TransactionController from '@controllers/transaction/transaction.controller';

const routes = Router();

routes.post('/login', AuthController.login);
routes.post('/logout', AuthController.logout);

routes.post('/auth', AuthController.authorize);

routes.get('/users', AuthController.authenticate, UserController.all);

routes.post(
  '/users',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      email: Joi.string().required()
    })
  }),
  AuthController.authenticate, UserController.create
);

routes.get('/alert', AuthController.authenticate, AlertController.all);
routes.post('/alert', AuthController.authenticate, AlertController.create);

routes.get('/alerts', AuthController.authenticate, AlertsController.all);

routes.get('/categories', AuthController.authenticate, CategoryController.all);
routes.post('/categories', AuthController.authenticate, CategoryController.create);

routes.get('/transactions', AuthController.authenticate, TransactionController.all);
routes.post('/transactions', AuthController.authenticate, TransactionController.create);

export default routes;
