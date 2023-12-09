import { Express } from 'express';
import { buildExampleController } from './controllers/example.controller';

export const setupRouter = (app: Express) => {
  buildExampleController(app);
};
  