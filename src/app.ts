import i18nHttp from 'i18next-http-middleware'
import limiter from 'express-rate-limit'
import Backend from 'i18next-fs-backend'
import compression from 'compression'
import flash from 'express-flash'
import mongoose from 'mongoose'
import passport from 'passport'
import express from 'express'
import i18next from 'i18next'
import helmet from 'helmet'
import cors from 'cors'
import path from 'path'

import { errors } from 'celebrate'

import ExceptionHandler from '@resources/exceptions/exception.handler'
import { MONGODB_URI } from './utils/secrets'
import routes from './routes/routes'

class App {
  public express: express.Application;

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(flash())
    this.express.use(helmet())
    this.express.use(limiter())
    this.express.use(compression())
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(passport.initialize())
    this.i18n()
    this.cors()
  }

  private i18n (): void {
    i18next
      .use(Backend)
      .init({
        backend: {
          loadPath: path.join(__dirname, '/resources/locales/{{lng}}/{{ns}}.json')
        },
        lng: 'en',
        fallbackLng: 'en',
        preload: ['en', 'pt', 'es']
      })

    this.express.use(i18nHttp.handle(i18next))
  }

  private cors (): void {
    this.express.use(
      cors({
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true
      })
    )
  }

  private database (): void {
    mongoose.connect(MONGODB_URI, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true
    })
  }

  private routes (): void {
    this.express.use(routes)
    this.express.use(errors())
    this.routesExceptionHandler()
  }

  private routesExceptionHandler (): void {
    this.express.use(ExceptionHandler.handle)
  }
}

export default new App().express
