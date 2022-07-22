const { Router } = require('express');
const router = new Router()
const userControlller = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userControlller.registration)
router.post('/login', userControlller.login)
router.get('/auth', authMiddleware,userControlller.check)

module.exports = router