const {
  listNews,
  getNews,
  listVideos,
  getVideo,
  addNewsImage,
} = require('../services/features')

exports.listNews = async (req, res) => {
  const response = await listNews();
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.getNews = async (req, res) => {
  const id = req.params.newsId;
  const response = await getNews(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.listVideos = async (req, res) => {
  const response = await listVideos();
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}

exports.getVideo = async (req, res) => {
  const id = req.params.videoId
  const response = await getVideo(id);
  const { error, status } = response;
  if (error) {
    return res.status(status).json(response);
  }
  return res.status(status).json(response);
}
