const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth')
// For Login Page display
router.get('/login', authController.getLogin)

// For User authentication 
router.post('/login', authController.postLogin)

// For Logout
router.post('/logout', authController.postLogout)

module.exports = router;