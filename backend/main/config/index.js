require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  DBhost: process.env.DB_HOST,
  DBport: process.env.DB_port,
  DBuser: process.env.DB_USER,
  DBpwd: process.env.DB_PASSWORD,
  DBname: process.env.DB_NAME,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  secretKey: process.env.SECRET_KEY,
  addisHiwotMail: process.env.ADDIS_HIWOT_MAIL,
  addisHiwotMailPassword: process.env.ADDIS_HIWOT_MAIL_PASS,
  addisHiwotClient: process.env.ADDIS_HIWOT_CLIENT,
  addisHiwotClientPassword: process.env.ADDIS_HIWOT_CLIENT_PASS,
  addisHiwotServiceNoreply: process.env.ADDIS_HIWOT_SERVICE_NOREPLY,
  addisHiwotServiceNoreplyPassword: process.env.ADDIS_HIWOT_SERVICE_NOREPLY_PASS,
};
