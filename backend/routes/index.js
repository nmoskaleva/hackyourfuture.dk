import express from 'express'
import err_handler from '../err_handler'
import usersRouter from './usersRouter'

const router = express.Router()
express().use(err_handler)


router.use('/users', usersRouter)
// router.use('/other', otherRouter)

export default router