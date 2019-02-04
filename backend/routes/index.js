import express from 'express'
import err_handler from '../err_handler'

const router = express.Router()
express().use(err_handler)


// router.use('/other', otherRouter)

export default router
