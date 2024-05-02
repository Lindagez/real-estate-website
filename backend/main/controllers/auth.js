const { signup, login, adminLogin, updateToken, logout } = require('../services/auth');

exports.adminLogin = async (req, res) => {
  const response = await adminLogin(req.body);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.login = async (req, res) => {
  const response = await login(req.body);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.signup = async (req, res) => {
  const response = await signup(req.body);
  const { error, status, } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
};

exports.updateToken = (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) {
    return res.status(400).json({ status: 400, error: true, message: 'Token not found' });
  }
  const response = updateToken(refreshToken);
  const { error, status, } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
};

exports.logout = (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) {
    return res.status(400).json({ status: 400, error: true, message: 'Token not found' });
  }
  const response = logout(refreshToken);
  const { error, status, } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
};
