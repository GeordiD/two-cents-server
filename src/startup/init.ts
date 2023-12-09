import { Express } from 'express';

export const setupApp = (app: Express) => {
  // set database connections

  const APP_PORT = 3000;

  app.listen(APP_PORT, () => {
    console.log(`Server started on port ${APP_PORT}`);
  });

};
