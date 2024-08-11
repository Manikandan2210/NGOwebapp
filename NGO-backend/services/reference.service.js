const express = require('express');
const db = require("../configurations/appConfigs").connection;

exports.getrefno = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM  reference ', (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getrefnoById = (reference_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM  reference WHERE reference_id = ?', [reference_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); // Assuming user IDs are unique, so only one result is expected
      }
    });
  });
};

exports.createrefno = (user) => {
  const { reference_no } = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO  reference (reference_no) VALUES (?)', [reference_no], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updaterefno = (reference_id, user) => {
 const {reference_no} = user;
return new Promise((resolve, reject) => {
db.query('UPDATE reference SET reference_no = ? WHERE reference_id = ?', [reference_no, reference_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
 }
    });
  });
};

exports.deleterefno = (reference_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM  reference WHERE reference_id = ?', [reference_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


