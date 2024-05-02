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
const user_table = 'user';
const order_table = 'orders'
const registration_table = "registration";

const promisePool = pool.promise();

exports.createUser = async (userData) => {
  try {
    const [rows] = await promisePool.query(`INSERT INTO ${user_table} SET ?`, userData);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.getUserByEmail = async (email) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM ${user_table} WHERE email = ?`, [email]);
    return { success: true, result: rows[0] };
  } catch (error) {
    return { error: true, result: error.message };
  }
}

exports.getUserById = async (id) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM ${user_table} WHERE id = ?`, [id]);
    return { success: true, result: rows[0] };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.getRoleById = async (id) => {
  try {
    const [rows] = await promisePool.query(`SELECT role FROM ${user_table} WHERE id = ?`, [id]);
    return { success: true, result: rows[0] };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.updateUserById = async (userData) => {
  try {
    const { id } = userData;
    userData.id && delete userData.id;
    const [rows] = await promisePool.query(`UPDATE ${user_table} SET ? WHERE id = ? `, [userData, id]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.deleteUserById = async (id) => {
  try {
    const deleteMode = { status: 'deleted' }
    const [rows] = await promisePool.query(`UPDATE ${user_table} SET ? WHERE id = ? `, [deleteMode, id]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.addOrderById = async (orderData) => {
  try {
    const [rows] = await promisePool.query(`INSERT INTO ${order_table} SET ?`, orderData);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.getOrdersByUserId = async (userId) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM ${order_table} WHERE userId = ?`, [userId]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.registerUser = async (data) => {
  try {
    const [rows] = await promisePool.query(`INSERT INTO ${registration_table} SET ?`, data);;
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.getRegistrationByUserId = async (id) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM ${registration_table} WHERE userId = ?`, [id]);
    return { success: true, result: rows[0] };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

