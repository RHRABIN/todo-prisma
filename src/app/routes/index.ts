import express from 'express';
import { DataRoutes } from '../modules/data/data.routes';
import { SpecializationRoutes } from '../modules/specialization/specialization.routes';

const router = express.Router();
const moduleRoutes = [
  //... routes
  {
    path: '/data',
    route: DataRoutes,
  },
  {
    path: '/specialization',
    route: SpecializationRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
