const {
  listNews,
  getNews,
  listVideos,
  getVideo,
  addNewsImageById,
} = require('../models/features');

// News Services
exports.listNews = async () => {
  const response = await listNews();
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, result }
}

exports.getNews = async (id) => {
  const response = await getNews(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  if (result == undefined) {
    return { status: 403, error: true, message: "News not found" }
  }
  return { status: 200, success, result }
}

// Video Services
exports.listVideos = async () => {
  const response = await listVideos();
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, result }
}

exports.getVideo = async (id) => {
  const response = await getVideo(id);
  const { error, success, result } = response;
  if (error) {
    return { status: 403, error, message: result }
  }
  return { status: 200, success, result }
}
