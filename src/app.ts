import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import flash from 'express-flash';
import compression from 'compression';
import limiter from 'express-rate-limit';
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import i18nextMiddleware from 'i18next-express-middleware';

import { errors } from 'celebrate';

import routes from './routes/routes';
import { MONGODB_URI } from './utils/secrets';

class App {
  public express: express.Application;

  public constructor () {
    this.express = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares (): void {
    this.express.use(flash());
    this.express.use(helmet());
    this.express.use(errors());
    this.express.use(limiter());
    this.express.use(compression());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(passport.initialize());
    this.i18n();
    this.cors();
  }

  private i18n (): void {
    i18next
      .use(Backend)
      .use(i18nextMiddleware.LanguageDetector)
      .init({
        backend: {
          loadPath: path.resolve(__dirname, '/../resources/locales/{{lng}}/{{ns}}.json')
        },
        fallbackLng: 'en',
        preload: ['en', 'es']
      });

    this.express.use(i18nextMiddleware.handle(i18next));
  }

  private cors (): void {
    this.express.use(
      cors({
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true
      })
    );
  }

  private database (): void {
    mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  }

  private routes (): void {
    this.express.use(routes);
  }
}

export default new App().express;
