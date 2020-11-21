import { Router } from 'express'

import TransactionRoutes from './transaction/transaction.routes'
import CategoryRoutes from './category/category.routes'
import AlertsRoutes from './alerts/alerts.routes'
import AuthRoutes from 'routes/auth/auth.routes'
import UserRoutes from 'routes/user/user.routes'
import AlertRoutes from './alert/alert.routes'

const routes = Router()

routes.use('/transactions', TransactionRoutes)
routes.use('/categories', CategoryRoutes)
routes.use('/alerts', AlertsRoutes)
routes.use('/alert', AlertRoutes)
routes.use('/users', UserRoutes)
routes.use('/auth', AuthRoutes)

export default routes
