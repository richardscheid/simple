import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

class App {
  public express: express.Application;

  public constructor () {
    this.express = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares (): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database (): void {
    mongoose.connect(process.env.DB_URL, {
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
