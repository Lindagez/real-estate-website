const express = require('express');
const {
  dashboard,
  updateUser,
  deleteUser,
  addOrder,
  getOrders,
  registerUser,
  getUserRegistration,
  updateUserRegistration,
} = require('../controllers/user');

const router = express.Router();

router.get('/dashboard', dashboard);
router.patch('/update', updateUser);
router.delete('/delete', deleteUser);
router.post('/order/add', addOrder);
router.get('/orders/list/:userId', getOrders);
router.post('/register', registerUser);
router.patch('/registration/update', updateUserRegistration);
router.get('/registration/:userId', getUserRegistration);

module.exports = router;
