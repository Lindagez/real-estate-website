const {
  dashboard,
  updateUser,
  deleteUser,
  addOrder,
  getOrders,
  registerUser,
  getUserRegistration,
  updateUserRegistration,
} = require('../services/user');

exports.dashboard = async (req, res) => {
  const response = await dashboard(req.user);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.updateUser = async (req, res) => {
  const response = await updateUser(req.body);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.deleteUser = async (req, res) => {
  const { id } = req.body;
  const response = await deleteUser(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.addOrder = async (req, res) => {
  const response = await addOrder(req.body);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.getOrders = async (req, res) => {
  const userId = req.params.userId
  const response = await getOrders(userId);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

// User Registration

exports.registerUser = async (req, res) => {
  const response = await registerUser(req);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.getUserRegistration = async (req, res) => {
  const userId = req.params.userId
  const response = await getUserRegistration(userId);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.updateUserRegistration = async (req, res) => {
  const { user: { id } } = req.user;
  req.body.userId = id;
  const response = await updateUserRegistration(req.body);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}