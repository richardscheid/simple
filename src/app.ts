import cors from 'cors';
import routes from './routes';
import express from 'express';
import mongoose from 'mongoose';

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
    // mongoose.connect('', { useNewUrlParser: true });
  }

  private routes (): void {
    this.express.use(routes);
  }
}

export default new App().express;
