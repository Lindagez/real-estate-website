const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const getImage = (url) => {
  if (url.includes('property')) {
    return 'p'
  }
  if (url.includes('news')) {
    return 'n'
  }
  return '';
}

exports.manageImage = async (req, res, next) => {
  try {
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);

    // Ensure a file was uploaded
    if (!req.file) {
      return res.status(400).json({ status: 400, error: true, message: 'No file uploaded' });
    }
    const path = getImage(req.url);
    const MAX_IMAGE_NAME_LENGTH = 20
    // Read the file and check the metadata
    const imageBuffer = fs.readFileSync(req.file.path);
    const metadata = await sharp(imageBuffer).metadata();
    const validImageFormats = ['JPEG', 'PNG', 'SVG', 'WEBP']
    if (!validImageFormats.includes(metadata.format.toUpperCase())) {
      fs.unlinkSync(req.file.path);
      return res.status(400).send('Only JPEG images are allowed');
    }
    // Perform sanitization on the filename
    const sanitizedFilename = sanitizeFilename(req.file.originalname, MAX_IMAGE_NAME_LENGTH);
    const processedFilename = `${uuidv4()}-${sanitizedFilename}`;

    // Process the uploaded image with Sharp
    const processedImage = await sharp(imageBuffer)
      .resize(width, height) // Resize the image to 800x600 pixels
      .toBuffer();

    // Strip potentially harmful content (e.g., EXIF data) from the image
    const strippedImage = await sharp(processedImage)
      .withMetadata(false)
      .toBuffer();
    // Save the processed and stripped image
    await sharp(strippedImage).toFile(`uploads/${path}/${processedFilename}`);
    // Delete the first uploaded file after processing
    fs.unlinkSync(req.file.path);
    req.pathName = `uploads/${path}/${processedFilename}`;
    req.processedFilename = processedFilename;
    return next();
  } catch (error) {
    // Delete the uploaded file if an error occurs during processing
    fs.unlinkSync(req.file.path);
    return res.status(400).json({ error: 'Invalid image' });
  }
};
function sanitizeFilename(filename, maxLength) {
  const sanitized = filename
    .replace(/[^\w\s.-]/g, '')  // Remove special characters except for underscores, hyphens, dots, and spaces
    .replace(/\s+/g, '_');     // Replace spaces with underscores
  if (sanitized.length > maxLength) {
    const extension = sanitized.substring(sanitized.lastIndexOf('.'));
    const truncatedName = sanitized.substring(0, maxLength - extension.length);
    return truncatedName + extension;
  }
  return sanitized;
}

exports.removeFile = (fileDir) => {
  try {
    fs.unlinkSync(fileDir);
    return true;
  } catch {
    return false;
  }
}