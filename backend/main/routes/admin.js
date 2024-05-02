const express = require('express');
const router = express.Router();
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
} = require('../controllers/admin');
const { superAdminChecker } = require('../middleware/authorization');
const { addPropertyRules, updatePropertyRules } = require('../validators/property');
const { inputValidator } = require('../middleware/user');
const { uploadImage } = require('../middleware/upload');
const { manageImage } = require('../utils/upload');

// admin route
router.post('/add/admin', superAdminChecker, addAdmin);
router.post('/remove/admin', superAdminChecker, removeAdmin);
// property route
router.post('/add/property', addPropertyRules, inputValidator, addProperty);
router.patch('/update/property', updateProperty);
router.delete('/delete/property/:propertyId', deleteProperty);
router.patch('/restore/property/:propertyId', restoreProperty);
// property image route
router.post('/add/property/image', uploadImage, manageImage, addPropertyImage)
router.patch('/update/property/image', uploadImage, manageImage, addPropertyImage)
router.delete('/delete/property/image/:imageId', deletePropertyImage)
// order route 
router.get('/orders', getOrders)
router.patch('/order/update', updateOrder)
// news route
router.post('/add/news', addNews);
router.patch('/update/news', updateNews);
router.delete('/delete/news/:newsId', deleteNews);
router.post('/news/image/add/:newsId', uploadImage, manageImage, addNewsImage);
router.delete('/news/image/delete/:newsId', deleteNewsImage);
router.post('/restore/news/:newsId', restoreNews);
// video route
router.post('/add/video', addVideo);
router.patch('/update/video', updateVideo);
router.delete('/delete/video/:videoId', deleteVideo);
router.post('/restore/video/:videoId', restoreVideo);
// find user
router.get('/get/users', getUsers);

module.exports = router;
