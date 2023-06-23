import { JwtPayload } from 'jsonwebtoken';
import { Router } from 'express';
import userController from '../controllers/user-controller';
import { body } from 'express-validator';
import { authMiddleware } from '../middleware/auth-middleware';
import { Request, NextFunction, Response } from 'express';

const router = Router();
router.post(
	'/registration',
	body('email').isEmail(),
	body('password').isLength({ min: 3, max: 32 }),
	userController.registration,
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.getRefresh);
router.get('/users', authMiddleware, userController.getUsers);

export default router;
