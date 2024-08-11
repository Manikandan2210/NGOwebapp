const express = require('express');
const db = require("../configurations/appConfigs").connection;

exports.getresearcherdetails = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM researcher_details', (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getresearcherdetailsById = (researcher_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM researcher_details WHERE researcher_id = ?', [researcher_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); 
      }
    });
  });
};

exports.createresearcherdetails = (user) => {
  const { researcher_name, address, country, pincode, phone_number } = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO researcher_details (researcher_name, address, country, pincode, phone_number) VALUES (?, ?, ?, ?, ?)', [researcher_name, address, country, pincode, phone_number], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updateresearcherdetails = (researcher_id, user) => {
  const { researcher_name, address, country, pincode, phone_number } = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE researcher_details SET researcher_name = ?, address = ?, country = ?, pincode = ?, phone_number = ? WHERE researcher_id = ?', [researcher_name, address, country, pincode, phone_number, researcher_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};
exports.deleteresearcherdetails = (researcher_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM researcher_details WHERE researcher_id = ?', [researcher_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


