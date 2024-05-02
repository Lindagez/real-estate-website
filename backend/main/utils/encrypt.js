const CryptoJS = require('crypto-js');
const { secretKey } = require('../config');

exports.encryptData = (data) => (
  CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString()
);

exports.decryptData = (encryptedData) => {
  const decrypted = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8);
  return JSON.parse(decrypted);
};
