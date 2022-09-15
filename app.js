import express from 'express';
import cors from 'cors';
import indexRoutes from './src/routes/indexRoutes';
import globalMiddleware from './src/middlewares/globalMiddleware';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(globalMiddleware);
  }

  routes() {
    this.app.use('/', indexRoutes);
  }
}

export default new App().app;
