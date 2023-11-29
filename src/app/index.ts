import { Application } from 'express';
import cors from 'cors';
import errorHandler from './errors';
import routes from './routes';

export default (app: Application): void => {
  // Middleware
  app.use(cors());

  // Api Handling
  Object.keys(routes).forEach((key) => {
    app.use('/', (routes as any)[key]);
  });

  // Error Handling
  app.use(errorHandler);

  // Unhandling Rejection Expection
  process.on('unhandledRejection', (reason: string, p: Promise<any>) => {
    console.log(p);
    throw reason;
  });

  process.on('uncaughtException', (error: Error) => {
    console.log(error);
    process.exit(1);
  });
};
