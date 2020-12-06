import { Router } from 'express'

import AuthController from '@controllers/auth/auth.controller'
import Container, { Service } from 'typedi'

@Service()
class AuthRoutes {

  public routes = Router()

  constructor () {
    this.router()
  }

  router (): void {
    this.routes.post('/', AuthController.authorize)
    this.routes.post('/login', AuthController.login)
    this.routes.post('/logout', AuthController.logout)
  }
}

export default Container.get(AuthRoutes).routes
