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
const property_table = 'property';
const property_image_table = 'image'

const promisePool = pool.promise();

exports.listProperties = async () => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM ${property_table}`);
    const propertyData = await Promise.all(
      rows.map(async (p) => {
        const { id } = p;
        const { result } = await this.getPropertyImageByPropertyId(id);
        p.images = result
        // console.log(await result);
        return p;
      })
    );
    return { success: true, result: propertyData };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.getPropertyById = async (id) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM ${property_table} WHERE id = ?`, [id]);
    const { result } = await this.getPropertyImageByPropertyId(id);
    return { success: true, result: { ...rows[0], images: result } };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.getPropertyImageByPropertyId = async (propertyId) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM ${property_image_table} WHERE propertyId = ?`, [propertyId]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};

exports.getPropertyImageById = async (id) => {
  try {
    const [rows] = await promisePool.query(`SELECT * FROM ${property_image_table} WHERE id = ?`, [id]);
    return { success: true, result: rows };
  } catch (error) {
    return { error: true, result: error.message };
  }
};