import { Router } from 'express';

import UserController from './controllers/UserController';
import AlertController from './controllers/AlertController';
import CategoryController from './controllers/CategoryController';
import TransactionController from './controllers/TransactionController';

const routes = Router();

routes.get('/users', UserController.all);
routes.post('/users', UserController.create);

routes.get('/alert', AlertController.all);
routes.post('/alert', AlertController.create);

routes.get('/transactions', TransactionController.all);
routes.post('/transactions', TransactionController.create);

routes.get('/categories', CategoryController.all);
routes.post('/categories', CategoryController.create);

export default routes;
