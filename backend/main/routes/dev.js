const express = require('express');
const router = express.Router();
const { addSuperAdmin, updateSuperAdmin } = require('../controllers/dev');

router.post('/add/super/admin', addSuperAdmin);
router.patch('/update/super/admin', updateSuperAdmin);

module.exports = router;
