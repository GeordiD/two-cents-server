import express from 'express';
import { setupApp } from './startup/init';
import { setupRouter } from './router';
import { setupSecurity } from './startup/security';

const app = express();

setupApp(app);
setupSecurity(app, express);
setupRouter(app);