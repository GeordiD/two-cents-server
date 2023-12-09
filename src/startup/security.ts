import cors from 'cors';
import { Express } from 'express';

export const setupSecurity = (app: Express, express: any) =>
  app
    .use(cors())
    .use(express.json())
