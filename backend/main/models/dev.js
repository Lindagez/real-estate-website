const mysql = require('mysql2');
const { removeAdminById } = require('./admin')
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
const table = 'user';

const promisePool = pool.promise();

const SUPER_ADMIN_ROLE_VALUE = 7;
const ADMIN_ROLE_VALUE = 5;

exports.addSuperAdminById = async (id) => {
  try {
    const response = await getSuperAdmin();
    if (!response) {
      return { error: true, result: 'Can not get response from database' };
    }
    const { error, success, result } = response;
    if (error) {
      return { error: true, result: 'Can not get super admin information' };
    }
    if (result.length >= 1) {
      return { error: true, result: 'Multiple super admin not allowed' };
    }
    const [rows] = await promisePool.query(`UPDATE ${table} SET role = ? WHERE id = ? `, [SUPER_ADMIN_ROLE_VALUE, id]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.updateSuperAdminById = async (id) => {
  try {
    const response = await getSuperAdmin();
    if (!response) {
      return { error: true, result: 'Super admin not assigned' };
    }
    const { error, success, result } = response;
    if (error) {
      return { error: true, result: 'Super admin not found' };
    }
    if (result.length > 1) {
      return { error: true, result: 'Multiple super admin found' };
    }
    if (result.length === 0) {
      return { error: true, result: 'No super admin found' };
    }
    const oldSuperAdminId = result[0].id;
    removeAdminById(oldSuperAdminId);
    const [rows] = await promisePool.query(`UPDATE ${table} SET role = ? WHERE id = ? `, [SUPER_ADMIN_ROLE_VALUE, id]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

const getSuperAdmin = async () => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM ${table} WHERE role = ? `, [SUPER_ADMIN_ROLE_VALUE]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
}
