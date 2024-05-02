const {
  interestFormService,
  messageFormService
} = require('../services/mailer');

exports.interestFormController = async (req, res) => {
  const formData = req.body;
  const response = await interestFormService(formData);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.messageFormController = async (req, res) => {
  const formData = req.body;
  const response = await messageFormService(formData);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}