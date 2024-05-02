const {
  addAdmin,
  removeAdmin,
  addProperty,
  deleteProperty,
  updateProperty,
  addPropertyImage,
  deletePropertyImage,
  getOrders,
  updateOrder,
  addNews,
  updateNews,
  deleteNews,
  addVideo,
  updateVideo,
  deleteVideo,
  getUsers,
  addNewsImage,
  deleteNewsImage,
  restoreNews,
  restoreVideo,
  restoreProperty,
} = require('../services/admin');

exports.addAdmin = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ status: 400, error: true, message: 'Id not found' });
  }
  const response = await addAdmin(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.removeAdmin = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ status: 400, error: true, message: 'Id not found' });
  }
  const response = await removeAdmin(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.addProperty = async (req, res) => {
  const response = await addProperty(req.body);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.updateProperty = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ status: 400, error: true, message: 'Id not found' });
  }
  const response = await updateProperty(req.body);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.deleteProperty = async (req, res) => {
  const id = req.params.propertyId;
  const response = await deleteProperty(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.restoreProperty = async (req, res) => {
  const id = req.params.propertyId;
  const response = await restoreProperty(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.addPropertyImage = async (req, res) => {
  const { description, propertyId } = req.body;
  if (!description || !propertyId) {
    return res.status(400).json({ status: 400, error: true, message: "Please make sure to send all the necessary information" });
  }
  const response = await addPropertyImage({ filename: req.processedFilename, description, imageUrl: req.pathName, propertyId });
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.deletePropertyImage = async (req, res) => {
  const id = req.params.imageId;
  const response = await deletePropertyImage(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.getOrders = async (req, res) => {
  const response = await getOrders();
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.updateOrder = async (req, res) => {
  const response = await updateOrder(req.body);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

// News management

exports.addNews = async (req, res) => {
  const { user: { id } } = req.user;
  req.body.authorId = id;
  const response = await addNews(req.body);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.updateNews = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ status: 400, error: true, message: 'Id not found' });
  }
  const response = await updateNews(req.body);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.deleteNews = async (req, res) => {
  const id = req.params.newsId;
  const response = await deleteNews(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.restoreNews = async (req, res) => {
  const id = req.params.newsId;
  const response = await restoreNews(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.addNewsImage = async (req, res) => {
  const id = req.params.newsId;
  const response = await addNewsImage({ id, imageUrl: req.pathName, });
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.deleteNewsImage = async (req, res) => {
  const id = req.params.newsId;
  const response = await deleteNewsImage(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

// Video management

exports.addVideo = async (req, res) => {
  const { user: { id } } = req.user;
  req.body.uploaderId = id;
  const response = await addVideo(req.body);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.updateVideo = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ status: 400, error: true, message: 'Id not found' });
  }
  const response = await updateVideo(req.body);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.deleteVideo = async (req, res) => {
  const id = req.params.videoId;
  const response = await deleteVideo(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.restoreVideo = async (req, res) => {
  const id = req.params.videoId;
  const response = await restoreVideo(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

// get users controllers

exports.getUsers = async (req, res) => {
  const findBy = req.query.findBy;
  const value = req.query.value;
  const response = await getUsers({ findBy, value });
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}