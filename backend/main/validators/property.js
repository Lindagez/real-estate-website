const { checkSchema } = require('express-validator');

const priceChecker = () => ({
  isEmpty: {
    negated: true,
    errorMessage: `Price is required`,
  },
  isNumeric: {
    errorMessage: 'Price must be a type of number'
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

const stringChecker = (name) => ({
  isString: {
    errorMessage: `${name} must be a string`,
  },
});
const updatePriceChecker = () => ({
  isNumeric: {
    errorMessage: 'Price must be a type of number'
  },
});

exports.addPropertyRules = checkSchema({
  name: reqStringChecker('Name'),
  type: reqStringChecker('Type'),
  status: reqStringChecker('Status'),
  description: reqStringChecker('Description'),
  country: reqStringChecker('Country'),
  city: reqStringChecker('City'),
  subCity: reqStringCheckerOptional('Sub city'),
  location: reqStringChecker('Location'),
  price: priceChecker(),
});

exports.updatePropertyRules = checkSchema({
  name: stringChecker('Name'),
  type: stringChecker('Type'),
  status: stringChecker('Status'),
  description: stringChecker('Description'),
  country: stringChecker('Country'),
  city: stringChecker('City'),
  subCity: stringChecker('Sub city'),
  location: stringChecker('Location'),
  price: updatePriceChecker(),
});
