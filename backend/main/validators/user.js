const { checkSchema } = require('express-validator');

const nameChecker = (name) => ({
  isEmpty: {
    negated: true,
    errorMessage: `${name} is required`,
  },
  // type and validity check
  isString: {
    errorMessage: `${name} must be a string`,
  },
  // length check
  isLength: {
    options: { max: 45 },
    errorMessage: `${name} is too long`,
  },
  // Sanitization and format check
  matches: {
    options: [/^[a-zA-Z]*$/],
    errorMessage: `${name} must be a set of an English letters only`,
  },
});
const emailChecker = () => ({
  isEmpty: {
    negated: true,
    errorMessage: 'Email is required',
  },
  isEmail: {
    errorMessage: 'Not a valid email address',
  },
  isLength: {
    options: { min: 4, max: 45 },
    errorMessage: 'Email must be between 4 and 45 characters',
  },
});
const phoneChecker = () => ({
  isEmpty: {
    negated: true,
    errorMessage: 'Phone is required',
  },
  isNumeric: {
    errorMessage: 'Phone is type of number'
  },
  isLength: {
    options: { min: 4, max: 15 },
    errorMessage: 'phone must be between 4 and 14 characters',
  },
});
const phoneChecker2 = () => ({
  optional: {
    options: { nullable: true },
  },
  isNumeric: {
    errorMessage: 'Phone is type of number'
  },
  isLength: {
    options: { min: 4, max: 15 },
    errorMessage: 'phone must be between 4 and 14 characters',
  },
});
const passwordChecker = () => ({
  isEmpty: {
    negated: true,
    errorMessage: 'Password is required',
  },
  // type and validity check
  isString: {
    errorMessage: 'Password must be a string',
  },
  // length check

  isLength: {
    options: { min: 8, max: 32 },
    errorMessage: 'Password must be 8 - 32 characters long',
  },
  // Sanitization and format check
  matches: {
    options: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/],
    errorMessage: 'Password must contain at least one small letter, capital letter and number',
  },

});
const zipCodeChecker = () => ({
  optional: {
    options: { nullable: true },
  },
  isNumeric: {
    errorMessage: 'Zip code is type of number'
  },
  isLength: {
    options: { min: 4, max: 5 },
    errorMessage: 'Zip code must be 4 or 5 digits',
  },
});
const reqStringChecker = (name) => ({
  isEmpty: {
    negated: true,
    errorMessage: `${name} is required`,
  },
  isString: {
    errorMessage: `${name} must be a string`,
  },
});

const reqStringCheckerOptional = (name) => ({
  optional: {
    options: { nullable: true },
  },
  isEmpty: {
    negated: true,
    errorMessage: `${name} is required`,
  },
  isString: {
    errorMessage: `${name} must be a string`,
  },
});

exports.userSignupRules = checkSchema({
  firstName: nameChecker('First name'),
  lastName: nameChecker('Last name'),
  phone: phoneChecker(),
  phone2: phoneChecker2(),
  email: emailChecker(),
  password: passwordChecker(),
  zipCode: zipCodeChecker(),
  country: reqStringChecker('Country'),
  state: reqStringChecker('State'),
  city: reqStringChecker('City'),
  street: reqStringCheckerOptional('Street'),
});

exports.userLoginRules = checkSchema({
  email: emailChecker(),
  password: passwordChecker(),
});
