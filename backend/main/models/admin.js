const mysql = require('mysql2');
const {
  DBhost, DBport, DBuser, DBpwd, DBname,
} = require('../config');
const { getCurrentTimestamp } = require('../utils/user');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: DBhost,
  port: DBport,
  user: DBuser,
  password: DBpwd,
  database: DBname,
});
const user_table = 'user';
const property_table = 'property'
const property_image_table = 'image'
const order_table = 'orders'
const news_table = 'news'
const video_table = 'video'

const promisePool = pool.promise();

const ADMIN_ROLE_VALUE = 5;
const USER_ROLE_VALUE = 1;

exports.addAdminById = async (id) => {
  try {
    const [rows] = await promisePool.query(`UPDATE ${user_table} SET role = ? WHERE id = ? `, [ADMIN_ROLE_VALUE, id]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.removeAdminById = async (id) => {
  try {
    const [rows] = await promisePool.query(`UPDATE ${user_table} SET role = ? WHERE id = ? `, [USER_ROLE_VALUE, id]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};
// property database management
exports.addProperty = async (propertyData) => {
  try {
    const [rows] = await promisePool.query(`INSERT INTO ${property_table} SET ?`, propertyData);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.updatePropertyById = async (propertyData) => {
  try {
    const { id } = propertyData
    delete propertyData.id;
    const [rows] = await promisePool.query(`UPDATE ${property_table} SET ? WHERE id = ? `, [propertyData, id]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.deletePropertyById = async (id) => {
  try {
    const mysqlTimestamp = getCurrentTimestamp();
    const deleteData = {
      status: "deleted",
      deletedAt: mysqlTimestamp,
    }
    const [rows] = await promisePool.query(`UPDATE ${property_table} SET ? WHERE id = ? `, [deleteData, id]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.restoreProperty = async (id) => {
  try {
    const [rows] = await promisePool.query(`UPDATE ${property_table} SET status = 'active' WHERE id = ? `, [id]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

// Property image database management
exports.addPropertyImageById = async (propertyImageData) => {
  try {
    const [rows] = await promisePool.query(`INSERT INTO ${property_image_table} SET ?`, propertyImageData);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.deletePropertyImageById = async (id) => {
  try {
    const [rows] = await promisePool.query(`DELETE FROM ${property_image_table} WHERE id = ?`, id);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

// Order database management
exports.getOrders = async () => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM ${order_table}`);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.updateOrder = async (orderData) => {
  try {
    const { userId, orderId } = orderData
    delete orderData.userId
    delete orderData.orderId
    const [rows] = await promisePool.query(`UPDATE ${order_table} SET ? WHERE id = ? AND userId = ?`, [orderData, orderId, userId]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error };
  }
};

// News database management

exports.addNews = async (newsData) => {
  try {
    const [rows] = await promisePool.query(`INSERT INTO ${news_table} SET ?`, newsData);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.updateNewsById = async (newsData) => {
  try {
    const { id } = newsData
    delete newsData.id;
    const [rows] = await promisePool.query(`UPDATE ${news_table} SET ? WHERE id = ? `, [newsData, id]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.deleteNewsById = async (id) => {
  try {
    const [rows] = await promisePool.query(`DELETE FROM ${news_table} WHERE id = ?`, id);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.addNewsImageById = async (newsImageData) => {
  try {
    const { id } = newsImageData;
    delete newsImageData.id;
    const [rows] = await promisePool.query(`UPDATE ${news_table} SET ? WHERE id = ? `, [newsImageData, id]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.deleteNewsImageById = async (id) => {
  try {
    const deleteData = { imageUrl: 'n/a' };
    const [rows] = await promisePool.query(`UPDATE ${news_table} SET ? WHERE id = ? `, [deleteData, id]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

// video database management

exports.addVideo = async (videoData) => {
  try {
    const [rows] = await promisePool.query(`INSERT INTO ${video_table} SET ?`, videoData);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.updateVideoById = async (videoData) => {
  try {
    const { id } = videoData
    delete videoData.id;
    const [rows] = await promisePool.query(`UPDATE ${video_table} SET ? WHERE id = ? `, [videoData, id]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.deleteVideoById = async (id) => {
  try {
    const [rows] = await promisePool.query(`DELETE FROM ${video_table} WHERE id = ?`, id);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

// get user database management

exports.getUsers = async (query) => {
  try {
    const { findBy, value } = query;
    const [rows] = await promisePool.query(`SELECT * FROM ${user_table} WHERE ${findBy} = ?`, [value]);
    if (rows[0] !== undefined) {
      const { password } = rows[0];
      if (password !== undefined) {
        delete rows[0].password;
      }
    }

    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};