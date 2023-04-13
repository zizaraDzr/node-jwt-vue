import { Router } from 'express';
import userController from '../controllers/user-controller';
import { body } from 'express-validator';

const router = Router();
const user = new userController();
router.post(
	'/registration',
	body('email').isEmail(),
	body('password').isLength({ min: 3, max: 32 }),
	user.registration,
);
router.post('/login', user.login);
router.post('/logout', user.logout);
router.get('/refresh', user.getRefresh);
router.get('/users', user.getUsers);

export default router;
