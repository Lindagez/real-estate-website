const { validationResult } = require('express-validator');

exports.inputValidator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ status: 406, ...errors });
  }
  return next();
};
