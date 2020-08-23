import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import flash from 'express-flash';
import compression from 'compression';
import limiter from 'express-rate-limit';

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
    this.express.use(limiter());
    this.express.use(compression());
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(passport.initialize());
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
