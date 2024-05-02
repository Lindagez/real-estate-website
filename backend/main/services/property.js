const {
  listProperties,
  getPropertyById,
} = require('../models/property')

exports.listProperties = async (id) => {
  const response = await listProperties();
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, result }
}

exports.getProperty = async (id) => {
  const response = await getPropertyById(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, result }
}

exports.restoreProperty = async (id) => {
  const response = await restoreProperty(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, result }
}
