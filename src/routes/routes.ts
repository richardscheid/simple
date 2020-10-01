import { Router } from 'express';

import AuthRoutes from 'routes/auth/auth.routes';
import UserRoutes from 'routes/user/user.routes';
import AlertRoutes from './alert/alert.routes';
import AlertsRoutes from './alerts/alerts.routes';
import CategoryRoutes from './category/category.routes';
import TransactionRoutes from './transaction/transaction.routes';

const routes = Router();

routes.use('/auth', AuthRoutes);
routes.use('/users', UserRoutes);
routes.use('/alert', AlertRoutes);
routes.use('/alerts', AlertsRoutes);
routes.use('/categories', CategoryRoutes);
routes.use('/transactions', TransactionRoutes);

export default routes;
