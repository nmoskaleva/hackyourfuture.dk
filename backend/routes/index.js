const express = require('express')
const err_handler = require('../err_handler')
const usersRouter = require('./usersRouter')

const router = express.Router()
express().use(err_handler)


router.use('/users', usersRouter)
// router.use('/other', otherRouter)

module.exports = router