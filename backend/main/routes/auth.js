const express = require('express');
const router = express.Router();
const { login, adminLogin, signup, updateToken, logout } = require('../controllers/auth');
const { userSignupRules } = require('../validators/user');
const { inputValidator } = require('../middleware/user');

router.post('/login', login);
router.post('/admin/login', adminLogin);
router.post('/signup', userSignupRules, inputValidator, signup);
router.delete('/logout', logout);
router.post('/token', updateToken);

module.exports = router;
