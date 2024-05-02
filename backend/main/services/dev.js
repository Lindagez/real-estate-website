const { addSuperAdminById, updateSuperAdminById } = require('../models/dev');

exports.addSuperAdmin = async (id) => {
  const response = await addSuperAdminById(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Super admin added' }
}

exports.updateSuperAdmin = async (id) => {
  const response = await updateSuperAdminById(id);
  const { error, success, result, } = response;
  if (error) {
    return { status: 403, error, message: result, }
  }
  return { status: 200, success, message: 'Super admin updated' }
}
