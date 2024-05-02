const jwt = require('jsonwebtoken');
const { accessTokenSecret } = require('../config');
const { getRoleById, getUserById } = require('../models/user');


exports.authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ status: 401, error: true, message: 'Unauthorize' });
  }
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      status: 401,
      error: 'Session lost! Please sign in again.',
    });
  }

  jwt.verify(token, accessTokenSecret, (error, user) => {
    if (error) {
      return res.status(401).json({ status: 401, error: true, message: 'Unauthorize' });
    }
    if (user) {
      const { user: { id } } = user;
      getUserById(id)
        .then(data => {
          const { result } = data;
          if (!result) {
            return res.status(400).json({ status: 401, error: true, message: 'Something went wrong' });
          }
          req.user = user;
          return next();
        })
    }
  });
};

exports.devChecker = async (req, res, next) => {
  const { user: { id } } = req.user;
  const response = await getRoleById(id);
  const { success, result: { role } } = response;
  if (role !== 10) {
    return res.status(401).json({ status: 401, error: true, message: 'Unauthorized' });
  }
  return next();
};

exports.adminChecker = async (req, res, next) => {
  const { user: { id } } = req.user;
  const response = await getRoleById(id);
  const { success, result: { role } } = response;
  const adminRoles = [5, 7];
  if (adminRoles.includes(role)) {
    return next();
  }
  return res.status(401).json({ status: 401, error: true, message: 'Unauthorized' });
};

exports.superAdminChecker = async (req, res, next) => {
  const { user: { id } } = req.user;
  const response = await getRoleById(id);
  const { success, result: { role } } = response;
  if (role !== 7) {
    return res.status(401).json({ status: 401, error: true, message: 'Unauthorized' });
  }
  return next();
};

