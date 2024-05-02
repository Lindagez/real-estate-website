const mysql = require('mysql2');
const {
  DBhost, DBport, DBuser, DBpwd, DBname,
} = require('../config');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: DBhost,
  port: DBport,
  user: DBuser,
  password: DBpwd,
  database: DBname,
});

const news_table = 'news';
const video_table = 'video';

const promisePool = pool.promise();

// News Models
exports.listNews = async () => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM ${news_table} WHERE status != ?`, ['deleted']);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.getNews = async (id) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM ${news_table} WHERE id = ?`, [id]);
    return { success: true, result: rows[0] };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

// Video Model 
exports.listVideos = async () => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM ${video_table} WHERE status = ?`, ['active']);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.getVideo = async (id) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM ${video_table} WHERE id = ?`, [id]);
    return { success: true, result: rows[0] };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

