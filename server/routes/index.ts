import {Router} from 'express'
const router =  Router()

const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')

//@ts-ignore
router.use('/user', userRouter)
//@ts-ignore
router.use('/type', typeRouter)
//@ts-ignore
router.use('/brand', brandRouter)
//@ts-ignore
router.use('/device', deviceRouter)

module.exports = router
