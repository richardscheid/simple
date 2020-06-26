import { Router } from 'express';

import UserController from './controllers/user.controller';
import AlertController from './controllers/alert.controller';
import AlertsController from './controllers/alerts.controller';
import CategoryController from './controllers/category.controller';
import TransactionController from './controllers/transaction.controller';

const routes = Router();

routes.get('/users', UserController.all);
routes.post('/users', UserController.create);

routes.get('/alert', AlertController.all);
routes.post('/alert', AlertController.create);

routes.get('/alerts', AlertsController.all);

routes.get('/categories', CategoryController.all);
routes.post('/categories', CategoryController.create);

routes.get('/transactions', TransactionController.all);
routes.post('/transactions', TransactionController.create);

export default routes;
