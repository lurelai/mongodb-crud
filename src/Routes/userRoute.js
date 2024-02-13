const router = require('express').Router()
const { createController, eraseController, updateController } = require('../Controllers/userController')

router.post('/create', createController)
router.delete('/delete', eraseController)
router.put('/update/:nickname', updateController)

module.exports = app=>app.use('/user', router)

