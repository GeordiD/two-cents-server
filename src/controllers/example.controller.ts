import { Express, Request, Response } from 'express';

export const buildExampleController = (
  app: Express,
) => {
  app
    .get('/', async (req: Request, res: Response) => {
      res.send('Hello Express APIvantage!!!');
    })
}
