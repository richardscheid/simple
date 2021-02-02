import { Request, Response, NextFunction } from 'express'
import { IUser } from '@domain/user/interfaces/user.interface'
import { JWT_SECRET } from '@config/environments/environments'

import Container, { Service } from 'typedi'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import i18next from 'i18next'

import { HttpStatusCode } from '@config/codes/http.statuscode'
import Exception from '@config/exceptions/exception'

import '@resources/auth/passport'

Service()
class AuthController {

  async login (req: Request, res: Response, next: NextFunction) {
    passport.authenticate('login', { failureFlash: true }, (err: Error, user: IUser) => {
      try {
        if (err) throw new Exception(HttpStatusCode.BAD_REQUEST, i18next.t('error.auth.login.failed'))

        if (!user) throw new Exception(HttpStatusCode.UNAUTHORIZED, i18next.t('error.auth.login.notvalid'))

        req.logIn(user, { session: false }, (err) => {
          if (err) return next(err)

          const payload = { sub: user.email }
          const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' })

          return res.json({
            token,
            auth: true,
            type: 'Bearer',
            user: { id: user._id, name: user.name, email: user.email }
          })
        })
      } catch (err) {
        next(err)
      }
    })(req, res, next)
  }

  authenticate (req: Request, res: Response, next: NextFunction) {
    passport.authenticate('jwt', { session: false }, (err: Error, user: IUser) => {
      if (err) throw new Exception(HttpStatusCode.BAD_REQUEST, i18next.t('error.auth.token.failed'))

      if (!user) throw new Exception(HttpStatusCode.UNAUTHORIZED, i18next.t('error.auth.token.notvalid'))

      next()
    })(req, res, next)
  }

  authorize (req: Request, res:Response) {
    let token = req.headers.authorization

    if (!token) throw new Exception(HttpStatusCode.BAD_REQUEST, i18next.t('error.auth.token.notprovided'))

    if (!token.startsWith('Bearer ')) throw new Exception(HttpStatusCode.BAD_REQUEST, i18next.t('error.auth.token.format'))

    token = token.slice(7, token.length).trimLeft()

    jwt.verify(token, JWT_SECRET, (err) => {
      if (err) throw new Exception(HttpStatusCode.UNAUTHORIZED, i18next.t('error.auth.token.notvalid'))

      return res.json({ auth: true })
    })
  }

  async logout (req: Request, res: Response) {
    req.logout()
    res.redirect('/')
  }
}

export default Container.get(AuthController)
