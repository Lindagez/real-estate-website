const express = require('express');
const router = express.Router();
const { authenticate, devChecker, adminChecker } = require('../middleware/authorization');
const { logout } = require('../controllers/auth')
const auth = require('./auth');
const user = require('./user');
const dev = require('./dev');
const admin = require('./admin');
const property = require('./property')
const features = require('./features');
const mailer = require('./mailer');

router.use('/auth', auth);
router.use('/u', authenticate, user);
router.use('/d', authenticate, devChecker, dev);
router.use('/a', authenticate, adminChecker, admin);
router.use('/p', property);
router.use('/f', features);
router.use(mailer);

module.exports = router;
