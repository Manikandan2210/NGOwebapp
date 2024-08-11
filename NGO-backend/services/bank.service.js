const express = require('express');
const db = require("../configurations/appConfigs").connection;
 
exports.getAllBankinfo = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM bankinfo', (error, results, fields) => {
      if (error) {
        reject(error);
      } else { 
        resolve(results);
      }
    });
  });
};

exports.getBankinfoById = (bank_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM bankinfo WHERE bank_id = ?', [bank_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); 
      }
    });
  });
};

exports.createBankinfo = (user) => {
  const { donation_id,name_of_bank_branch,ifsc_code,bank_reference,date_of_credit,foriegn_source,receipt_details } = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO bankinfo (donation_id,name_of_bank_branch,ifsc_code,bank_reference,date_of_credit,foriegn_source,receipt_details) VALUES (?,?,?,?,?,?,?)', [donation_id,name_of_bank_branch,ifsc_code,bank_reference,date_of_credit,foriegn_source,receipt_details], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updateBankinfo = (bank_id, user) => {
  const { donation_id,name_of_bank_branch,ifsc_code,bank_reference,date_of_credit,foriegn_source,receipt_details } = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE bankinfo SET donation_id = ?,name_of_bank_branch = ?,ifsc_code = ?,bank_reference = ?,date_of_credit = ?,foriegn_source = ?,receipt_details = ? WHERE bank_id = ?', [donation_id,name_of_bank_branch,ifsc_code,bank_reference,date_of_credit,foriegn_source,receipt_details, bank_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

exports.deleteBankinfo = (bank_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM bankinfo WHERE bank_id = ?', [bank_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


