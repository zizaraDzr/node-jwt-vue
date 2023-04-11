import { Router } from 'express'
import userController  from '../controllers/user-controller'
const router = Router()
const user = new userController()
router.post('/registration', user.registration)
router.post('/login', user.login)
router.post('/logout', user.logout)
router.get('/activate/:link', user.activate)
router.get('/refresh', user.getRefresh)
router.get('/users', user.getUsers)

export default router