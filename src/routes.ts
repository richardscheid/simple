import { Router } from 'express';

import AuthController from '@controllers/auth.controller';
import UserController from '@controllers/user.controller';
import AlertController from '@controllers/alert.controller';
import AlertsController from '@controllers/alerts.controller';
import CategoryController from '@controllers/category.controller';
import TransactionController from '@controllers/transaction.controller';

const routes = Router();

routes.post('/auth', AuthController.authenticate);

routes.post('/login', AuthController.login);
routes.post('/logout', AuthController.logout);

routes.get('/users', AuthController.authenticate, UserController.all);
routes.post('/users', AuthController.authenticate, UserController.create);

routes.get('/alert', AuthController.authenticate, AlertController.all);
routes.post('/alert', AuthController.authenticate, AlertController.create);

routes.get('/alerts', AuthController.authenticate, AlertsController.all);

routes.get('/categories', AuthController.authenticate, CategoryController.all);
routes.post('/categories', AuthController.authenticate, CategoryController.create);

routes.get('/transactions', AuthController.authenticate, TransactionController.all);
routes.post('/transactions', AuthController.authenticate, TransactionController.create);

export default routes;
