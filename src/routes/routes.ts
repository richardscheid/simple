import { Router } from 'express';

import AuthRoutes from 'routes/auth/auth.routes';
import UserRoutes from 'routes/user/UserRoutes';
import AlertRoutes from './alert/alert.routes';
import AlertsRoutes from './alerts/alerts.routes';
import CategoryRoutes from './category/CategoryRoutes';
import TransactionRoutes from './transaction/TransactionRoutes';

const routes = Router();

routes.use('/auth', AuthRoutes);
routes.use('/users', UserRoutes);
routes.use('/alert', AlertRoutes);
routes.use('/alerts', AlertsRoutes);
routes.use('/categories', CategoryRoutes);
routes.use('/transactions', TransactionRoutes);

export default routes;
