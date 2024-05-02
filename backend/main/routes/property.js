const express = require('express');
const router = express.Router();
const {
  listProperties,
  getProperty,
} = require('../controllers/property');

router.get('/list', listProperties);
router.get('/list/:propertyId', getProperty);

module.exports = router;
