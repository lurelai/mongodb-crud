const router = require('express').Router()
const { createController, eraseController } = require('../Controllers/userController')

router.post('/create', createController)
router.delete('/delete', eraseController)

module.exports = app=>app.use('/user', router)

