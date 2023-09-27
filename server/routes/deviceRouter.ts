import {Router} from 'express'
const router = Router()
const DeviceController = require('../controllers/deviceController')

router.get('/', DeviceController.getAll)
router.get('/:id', DeviceController.getOne)
router.post('/', DeviceController.create)

module.exports = router
