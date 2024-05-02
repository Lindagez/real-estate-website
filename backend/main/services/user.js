const { v4: uuidv4 } = require('uuid')
const { stringToTimestamp } = require('../utils/user')
const { passwordUpdater } = require('../utils/hash');
const {
  getUserById,
  updateUserById,
  deleteUserById,
  addOrderById,
  getOrdersByUserId,
  registerUser,
  getRegistrationByUserId
} = require('../models/user');

const { getProperty } = require('./property')

exports.dashboard = async (user) => {
  const { user: { id } } = user;
  const response = await getUserById(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: errorMessage }
  }
  if (!result) {
    return { status: 403, error: true, message: "User not found!" }
  }
  // remove private contents
  delete result.id;
  delete result.password;
  // return user data with status
  return { status: 200, success, user: result }
}

exports.updateUser = async (userData) => {
  // const updaterResult = await passwordUpdater(userData)
  // const { error: err } = updaterResult;
  // if (err) {
  //   return updaterResult;
  // }
  // if (Object.keys(updaterResult).length === 1) {
  //   return { status: 400, error: true, message: "No valid input" }
  // }
  const response = await updateUserById(userData);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Account updated' }
}

exports.deleteUser = async (id) => {
  const response = await deleteUserById(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'User deleted' }
}

exports.addOrder = async (orderData) => {
  const { deliveryDate, totalPrice, completedPrice, } = orderData
  const remainingPrice = typeof completedPrice !== 'undefined' ? totalPrice - completedPrice : 0;
  const deliveryTimestamp = stringToTimestamp(deliveryDate)
  const response = await addOrderById({ id: uuidv4(), ...orderData, deliveryDate: deliveryTimestamp, remainingPrice });
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Order added' }
}

exports.getOrders = async (userId) => {
  const response = await getOrdersByUserId(userId);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, result }
}

// user registration

exports.registerUser = async (req) => {
  const { user: { id } } = req.user;
  const { propertyId, passportNo, kebeleIdNo, houseNo } = req.body;
  const data = {
    id: uuidv4(),
    userId: id,
    propertyId,
    passportNo,
    kebeleIdNo,
    houseNo,
  };
  const response = await registerUser(data);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: "Registered Successfully! We will verify it soon." }
}

exports.getUserRegistration = async (userId) => {
  const { result: userData } = await getUserById(userId);
  if (!userData) {
    return { status: 400, error: true, message: "User not found!" };

  }
  delete userData.password
  const { result: registrationData } = await getRegistrationByUserId(userId);
  if (!registrationData) {
    return { status: 400, error: true, message: "User not registered!" };

  }
  const { propertyId } = registrationData;
  const { result: propertyData } = await getProperty(propertyId);
  if (!propertyData) {
    return { status: 400, error: true, message: "Property not found!" };

  }
  const result = {
    userData,
    registrationData,
    propertyData
  }
  return { status: 200, success: true, result }
}

exports.updateUserRegistration = async (data) => {
  const response = await updateUserRegistrationById(data);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Account updated' }
}
