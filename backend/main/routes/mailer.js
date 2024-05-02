const express = require('express');
const router = express.Router();
const { interestFormController, messageFormController } = require('../controllers/mailer')

router.post('/sendForm', interestFormController);
router.post('/sendMessage', messageFormController);

module.exports = router;
