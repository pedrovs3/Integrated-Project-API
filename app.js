import express from 'express';
import cors from 'cors';
import homeRoutes from './src/routes/homeRoutes';
import errorRoute from './src/routes/errorRoute';
import globalMiddleware from './src/middlewares/globalMiddleware';
import ServerlessHttp from 'serverless-http';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(globalMiddleware);
    this.app.use(cors());
  }

  routes() {
    this.app.use('/.netlify/functions/app', homeRoutes);

    this.app.use('*', errorRoute);
  }
}

const handler = ServerlessHttp(new App().app);

export { handler };
