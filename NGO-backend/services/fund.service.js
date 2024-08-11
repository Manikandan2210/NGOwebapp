const express = require('express');
const db = require("../configurations/appConfigs").connection;

exports.getfund = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM fund_ledger', (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getfundById = (fund_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM fund_ledger WHERE fund_id = ?', [fund_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); // Assuming user IDs are unique, so only one result is expected
      }
    });
  });
};

exports.createfund = (user) => {
  const { donation_detail_id, fund_type, total_amount } = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO fund_ledger (donation_detail_id, fund_type, total_amount) VALUES (?, ?, ?)', [donation_detail_id, fund_type, total_amount], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updatefund = (fund_id, user) => {
  const { donation_detail_id, fund_type, total_amount } = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE fund_ledger SET donation_detail_id = ?, fund_type = ?, total_amount = ? WHERE fund_id = ?', [donation_detail_id, fund_type, total_amount, fund_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

exports.deletefund = (fund_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM fund_ledger WHERE fund_id = ?', [fund_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


