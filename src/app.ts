import cors from 'cors';
import routes from './routes';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';

import { MONGODB_URI, SESSION_SECRET } from './utils/secrets';

class App {
  public express: express.Application;

  public constructor () {
    this.express = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares (): void {
    this.express.use(
      cors({
        origin: "http://localhost:3000",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true
      })
    );
    this.express.use(express.json());
    this.express.use(passport.initialize());
    this.express.use(passport.session());
    this.express.use(session({
      resave: true,
      saveUninitialized: true,
      secret: SESSION_SECRET
    }));
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
