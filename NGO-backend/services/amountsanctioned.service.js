const express = require('express');
const db = require("../configurations/appConfigs").connection;

exports.getAllamountsanctioned = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM amount_sanctioned', (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getamountsanctionedById = (amount_sanctioned_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM amount_sanctioned WHERE amount_sanctioned_id  = ?', [amount_sanctioned_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); 
      }
    });
  });
};

exports.createamountsanctioned = (user) => {
  const { project_id, amount_sanctioned_date, sanctioned_amount, installment_no } = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO amount_sanctioned ( project_id, amount_sanctioned_date, sanctioned_amount, installment_no) VALUES (?, ?, ?, ?)', [ project_id, amount_sanctioned_date, sanctioned_amount, installment_no], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updateamountsanctioned = (amount_sanctioned_id, user) => {
  const { project_id, amount_sanctioned_date, sanctioned_amount, installment_no } = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE amount_sanctioned SET project_id = ?, amount_sanctioned_date = ?, sanctioned_amount = ?, installment_no = ? WHERE amount_sanctioned_id  = ?', [project_id, amount_sanctioned_date, sanctioned_amount, installment_no, amount_sanctioned_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

exports.deleteamountsanctioned = (amount_sanctioned_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM amount_sanctioned WHERE amount_sanctioned_id  = ?', [amount_sanctioned_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


