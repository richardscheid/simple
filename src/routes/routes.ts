import { Router } from 'express'

import NotificationRoutes from './notification/notification.routes'
import TransactionRoutes from './transaction/transaction.routes'
import CategoryRoutes from './category/category.routes'
import AuthRoutes from 'routes/auth/auth.routes'
import UserRoutes from 'routes/user/user.routes'
import AlertRoutes from './alert/alert.routes'
import BankRoutes from './bank/bank.routes'

const routes = Router()

routes.use('/notifications', NotificationRoutes)
routes.use('/transactions', TransactionRoutes)
routes.use('/categories', CategoryRoutes)
routes.use('/alerts', AlertRoutes)
routes.use('/users', UserRoutes)
routes.use('/banks', BankRoutes)
routes.use('/auth', AuthRoutes)

export default routes
