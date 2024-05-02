exports.signupError = (message) => {
  if (message.includes('phone')) {
    return 'Phone number is already registered';
  }
  if (message.includes('email')) {
    return 'Email already exists';
  }
  return 'Something went wrong';
};
