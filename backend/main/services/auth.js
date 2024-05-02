const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const { createUser, getUserByEmail } = require('../models/user');
const { hashPassword, isValidPassword } = require('../utils/hash');
const { signupError } = require('../utils/error');
const { accessTokenSecret, refreshTokenSecret } = require('../config');
// const { addCredentials, getRefreshTokens, deleteCredential } = require('../utils/token');

const generateAccessToken = (user) => (
  jwt.sign({ ...user }, accessTokenSecret)
);

exports.signup = async (userData) => {
  const { password } = userData;
  const response = await createUser({ id: uuidv4(), ...userData, password: await hashPassword(password) });
  const { error, success, result } = response;
  if (error) {
    const errorMessage = signupError(result);
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Account created' }
}

exports.login = async (userData) => {
  const { email, password } = userData;
  const response = await getUserByEmail(email);
  const { error, success, result } = response;
  // checking use existence
  if (error || result === undefined) {
    return { status: 401, error: true, message: 'Invalid login credentials' }
  }
  // validating password
  const valid = await isValidPassword(password, result.password);
  if (!valid) {
    return { status: 401, error: true, message: 'Invalid login credentials' }
  }
  // generating token
  const { id } = result;
  const accessToken = generateAccessToken({ user: { id } });
  const refreshToken = jwt.sign({ user: { id } }, refreshTokenSecret);
  return { status: 200, success, accessToken, refreshToken }
}

exports.adminLogin = async (userData) => {
  const { email, password } = userData;
  const response = await getUserByEmail(email);
  const { error, success, result } = response;
  // checking use existence
  if (error || result === undefined) {
    return { status: 401, error: true, message: 'Invalid login credentials' }
  }
  const { role } = result;
  if (role < 5) {
    return { status: 401, error: true, message: 'Invalid login credentials' }
  }
  // validating password
  const valid = await isValidPassword(password, result.password);
  if (!valid) {
    return { status: 401, error: true, message: 'Invalid login credentials' }
  }
  // generating token
  const { id } = result;
  const accessToken = generateAccessToken({ user: { id } });
  const refreshToken = jwt.sign({ user: { id } }, refreshTokenSecret);
  return { status: 200, success, accessToken, refreshToken }
}


// updates the token using the refresh token
exports.updateToken = (refreshToken) => {

};

exports.logout = ('/logout', (refreshToken) => {
  // deleteCredential(refreshToken);
  return {
    status: 202, success: true, message: 'Logged out',
  }
});