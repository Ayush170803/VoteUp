const express = require('express');
const router = express.Router();
const { register, login, logout, resetPassword } = require('../controller/authController');
const authMiddleware = require('../middleware/authMiddleware');
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout); 
router.post('/reset-password', resetPassword); 
router.get('/status', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'User is logged in', user: req.user });
  });

module.exports = router;
