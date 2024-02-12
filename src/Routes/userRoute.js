const router = require('express').Router()
const { create } = require('../Controllers/userController')

router.get('/', create)

module.exports = app=>app.use('/user', router)

