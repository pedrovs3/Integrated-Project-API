import { Router } from 'express';
import errorsController from '../controllers/ErrorsController';

const route = Router();

route.get('*', errorsController.errorRoute);

export default route;
