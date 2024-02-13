const router = require('express').Router()
const { createController } = require('../Controllers/userController')

router.post('/', createController)

module.exports = app=>app.use('/user', router)

