const {
  listProperties,
  getProperty,
} = require('../services/property')

exports.listProperties = async (req, res) => {
  const response = await listProperties();
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.getProperty = async (req, res) => {
  const id = req.params.propertyId
  const response = await getProperty(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}
