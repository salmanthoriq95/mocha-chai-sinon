import { Application } from 'express';
import cors from 'cors';
import errorHandler from './errors';
import routes from './routes';
import helmet from 'helmet';
import express from 'express';

export default (app: Application): void => {
  // Middleware
  app.use(cors());
  app.use(helmet());
  app.use(express.json());

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
