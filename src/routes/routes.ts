import { Router } from 'express';

import AuthRoutes from 'routes/auth/AuthRoutes';
import UserRoutes from 'routes/user/UserRoutes';
import AlertRoutes from './alert/AlertRoutes';
import AlertsRoutes from './alerts/AlertsRoutes';
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
