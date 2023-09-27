import {Router} from 'express'
const router = Router()
const UserController = require('../controllers/userController')

router.get('/auth', UserController.check)
router.post('/registration', UserController.registration)
router.post('/login', UserController.login)

module.exports = router
