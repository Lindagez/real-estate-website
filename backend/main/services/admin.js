const { v4: uuidv4 } = require('uuid');
const {
  addAdminById,
  removeAdminById, addProperty,
  deletePropertyById,
  updatePropertyById,
  addPropertyImageById,
  deletePropertyImageById,
  getOrders,
  updateOrder,
  addNews,
  updateNewsById,
  deleteNewsById,
  addVideo,
  updateVideoById,
  deleteVideoById,
  getUsers,
  addNewsImageById,
  deleteNewsImageById,
  restoreNews,
  restoreVideo,
  restoreProperty,
} = require('../models/admin');
const { removeFile } = require('../utils/upload');
const { getNews } = require('./features');
const { getPropertyImageById } = require('../models/property');

const { getOrders: getOrdersByUserId } = require('./user')
// admin services
exports.addAdmin = async (id) => {
  const response = await addAdminById(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: errorMessage }
  }
  return { status: 200, success, message: 'Admin added' }
}

exports.removeAdmin = async (id) => {
  const response = await removeAdminById(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: errorMessage }
  }
  return { status: 200, success, message: 'Admin removed' }
}
// property services
exports.addProperty = async (propertyData) => {
  const response = await addProperty({ id: uuidv4(), ...propertyData });
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Property added' }
}

exports.updateProperty = async (propertyData) => {
  const response = await updatePropertyById(propertyData);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Property updated' }
}

exports.deleteProperty = async (id) => {
  const response = await deletePropertyById(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Property deleted' }
}

exports.restoreProperty = async (id) => {
  const response = await restoreProperty(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Property restored' }
}

// Property image services
exports.addPropertyImage = async (propertyImageData) => {
  const response = await addPropertyImageById({ id: uuidv4(), ...propertyImageData });
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Property image added' }
}

exports.deletePropertyImage = async (id) => {
  // const propertyImageResponse = await getPropertyImageById(id);
  const response = await deletePropertyImageById(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Property image deleted' }
}
// Order services
exports.getOrders = async () => {
  const response = await getOrders();
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, result }
}

exports.updateOrder = async (orderData) => {
  const { userId, orderId } = orderData;
  // validating required ids
  if (!userId) {
    return { status: 403, error: true, message: 'User id is missing' }
  }
  if (!orderId) {
    return { status: 403, error: true, message: 'Order id is missing' }
  }
  // getting order from user
  const orders = await getOrdersByUserId(userId);
  const { result: orderResult } = orders;
  // check if user has orders
  if (orderResult.length == 0) {
    return { status: 403, error: true, message: "No order found" }
  }
  // filtered order with id
  const filteredOrder = orderResult.filter((o) => {
    const { id } = o;
    return id == orderId;
  })
  if (filteredOrder.length == 0) {
    return { status: 403, error: true, message: "Order not found" }
  }
  const response = await updateOrder(orderData);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Order updated' }
}

// News Service

exports.addNews = async (newData) => {
  const response = await addNews({ id: uuidv4(), ...newData });
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'News added' }
}

exports.updateNews = async (newsData) => {
  const response = await updateNewsById(newsData);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'News updated' }
}

exports.deleteNews = async (id) => {
  const response = await deleteNewsById(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'News deleted' }
}

exports.restoreNews = async (id) => {
  const response = await restoreNews(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'News restored' }
}

exports.addNewsImage = async (newsImageData) => {
  const { id } = newsImageData;
  await this.deleteNewsImage(id);
  const response = await addNewsImageById(newsImageData);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'News image added' }
}

exports.deleteNewsImage = async (id) => {
  // request news information
  const newsResponse = await getNews(id);
  const { status, error: newsError, result: newsResult } = newsResponse;
  if (newsError) {
    return { status, error, message: result }
  }
  // get image path
  const { imageUrl } = newsResult;
  // delete from database
  const response = await deleteNewsImageById(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  // remove file and check status
  const removeResult = imageUrl != 'n/a' ? removeFile(imageUrl) : false;
  // if (removeResult == false) {
  //   return { status: 400, success, message: 'Can not delete image. Try update news.' }
  // }
  // return message
  return { status: 200, success, message: 'News image deleted' }
}

// Video Services

exports.addVideo = async (videoData) => {
  const response = await addVideo({ id: uuidv4(), ...videoData });
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Video added' }
}

exports.updateVideo = async (videoData) => {
  const response = await updateVideoById(videoData);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Video updated' }
}

exports.deleteVideo = async (id) => {
  const response = await deleteVideoById(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Video deleted' }
}

exports.restoreVideo = async (id) => {
  const response = await restoreVideo(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, message: 'Video restore' }
}

// get users

exports.getUsers = async (query) => {
  const response = await getUsers(query);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, result }
}