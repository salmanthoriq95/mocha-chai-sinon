import { Router } from 'express';

import usersRoutes from '../services/users/users.routes';
const router = Router();

export default {
  users: router.use('/users', usersRoutes),
};
