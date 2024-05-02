const express = require('express');
const router = express.Router();
const {
  listNews,
  getNews,
  listVideos,
  getVideo,
} = require('../controllers/features');


// news routes
router.get('/get/news', listNews);
router.get('/get/news/:newsId', getNews);

// video routes
router.get('/get/videos', listVideos);
router.get('/get/video/:videoId', getVideo);

module.exports = router;
