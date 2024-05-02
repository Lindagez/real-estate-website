const multer = require('multer');

const upload = multer({
  dest: 'uploads/',
});

exports.uploadImage = upload.single('image');