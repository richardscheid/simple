import { Router } from 'express';

import UserController from './controllers/UserController';
import TransactionController from './controllers/TransactionController';

const routes = Router();

routes.get('/users', UserController.all);
routes.post('/users', UserController.create);

routes.get('/transactions', TransactionController.all);
routes.post('/transactions', TransactionController.create);

export default routes;
