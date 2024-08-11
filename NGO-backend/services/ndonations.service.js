const express = require('express');
const db = require("../configurations/appConfigs").connection;
 
exports.getAllDonations = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM no_of_donations', (error, results, fields) => {
      if (error) {
        reject(error);
      } else { 
        resolve(results);
      }
    });
  });
};

exports.getdonationById = (donation_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM no_of_donations WHERE donation_id = ?', [donation_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); 
      }
    });
  });
};

exports.createDonation = (user) => {
  const { donation_name } = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO no_of_donations (donation_name) VALUES (?)', [donation_name], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updateDonation = (donation_id, user) => {
  const { donation_name } = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE no_of_donations SET donation_name = ? WHERE donation_id = ?', [donation_name, donation_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

exports.deleteDonation = (donation_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM no_of_donations WHERE donation_id = ?', [donation_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


