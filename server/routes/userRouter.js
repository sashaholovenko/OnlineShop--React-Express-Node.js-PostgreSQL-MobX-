const { Router } = require('express');
const router = new Router()
const userControlller = require('../controllers/userController')

router.post('/registration', userControlller.registration)
router.post('/login', userControlller.login)
router.get('/auth', userControlller.check)

module.exports = router