import { Router } from 'express';
import { isAuthenticated } from './config/passport';

import AuthController from './controllers/auth.controller';
import UserController from './controllers/user.controller';
import AlertController from './controllers/alert.controller';
import AlertsController from './controllers/alerts.controller';
import CategoryController from './controllers/category.controller';
import TransactionController from './controllers/transaction.controller';

const routes = Router();

routes.post('/login', AuthController.login);
routes.post('/logout', AuthController.logout);

routes.get('/users', isAuthenticated, UserController.all);
routes.post('/users', isAuthenticated, UserController.create);

routes.get('/alert', isAuthenticated, AlertController.all);
routes.post('/alert', isAuthenticated, AlertController.create);

routes.get('/alerts', isAuthenticated, AlertsController.all);

routes.get('/categories', isAuthenticated, CategoryController.all);
routes.post('/categories', isAuthenticated, CategoryController.create);

routes.get('/transactions', isAuthenticated, TransactionController.all);
routes.post('/transactions', isAuthenticated, TransactionController.create);

export default routes;
