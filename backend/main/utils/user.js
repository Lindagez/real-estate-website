const moment = require('moment');

exports.stringToTimestamp = (stringTime) => {
  const format = 'YYYY-MM-DD HH:mm:ss'; // Format of the input string
  const timestamp = moment(stringTime, format).format('YYYY-MM-DD HH:mm:ss');
  return timestamp;
}

exports.getCurrentTimestamp = () => {
  return moment().format('YYYY-MM-DD HH:mm:ss');
}
