const express = require('express');
const db = require("../configurations/appConfigs").connection;

exports.getinvestments = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM investment', (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getinvestmentsById = (investment_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM investment WHERE investment_id = ?', [investment_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); // Assuming user IDs are unique, so only one result is expected
      }
    });
  });
};

exports.createinvestments = (user) => {
  const { fund_id, investment_type , investment_amount } = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO investment (fund_id, investment_type , investment_amount) VALUES (?, ?, ?)', [fund_id, investment_type , investment_amount], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updateinvestments = (investment_id, user) => {
  const { fund_id, investment_type , investment_amount } = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE investment SET fund_id = ?, investment_type = ?, investment_amount = ? WHERE investment_id = ?', [fund_id, investment_type , investment_amount, investment_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

exports.deleteinvestments = (investment_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM investment WHERE investment_id = ?', [investment_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


