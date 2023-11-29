import { Router } from 'express';
import usersController from './users.controller';

const router = Router();

router.get('/', usersController.get);
router.post('/', usersController.post);
router.put('/', usersController.put);
router.delete('/', usersController.del);

export default router;
