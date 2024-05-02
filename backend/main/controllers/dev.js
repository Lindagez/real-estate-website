const { addSuperAdmin, updateSuperAdmin } = require('../services/dev');

exports.addSuperAdmin = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ status: 400, error: true, message: 'Id not found' });
  }
  const response = await addSuperAdmin(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.updateSuperAdmin = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ status: 400, error: true, message: 'Id not found' });
  }
  const response = await updateSuperAdmin(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}
