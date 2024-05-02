const fs = require('fs');

// Read the JSON file
// const fileDir = './resources/credentials';
const { encryptData, decryptData } = require('./encrypt');
// create if not exists the dir and the file to store encrypted credentials
const emptyChecker = () => {
  const filename = './resources/credentials';
  const dir = './resources';
  const data = { refreshTokens: [] };
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.open(filename, 'wx', (err, fd) => {
    if (err) {
      return;
    }
    fs.close(fd);
  });
  const content = fs.readFileSync(filename);
  if (content.toString() === '') {
    fs.writeFileSync(filename, encryptData(data));
  }
};

// emptyChecker();

const credentials = decryptData(fs.readFileSync(fileDir).toString());

exports.getRefreshTokens = () => credentials.refreshTokens;

const save = () => {
  fs.writeFileSync(fileDir, encryptData(credentials));
};

exports.deleteCredential = (refreshToken) => {
  const updatedRefreshTokens = credentials.refreshTokens.filter((token) => (
    refreshToken !== token.refreshToken
  ));
  credentials.refreshTokens = updatedRefreshTokens;
  return save();
};

exports.addCredentials = (credential) => {
  credentials.refreshTokens.push(credential);
  return save();
};
