import express from 'express';
import { DataRoutes } from '../modules/data/data.routes';

const router = express.Router();
const moduleRoutes = [
  //... routes
  {
    path: '/data',
    route: DataRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
