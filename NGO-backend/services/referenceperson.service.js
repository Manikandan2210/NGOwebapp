const express = require('express');
const db = require("../configurations/appConfigs").connection;

exports.getrefperson = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM reference_person_details', (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getrefpersonById = (reference_person_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM reference_person_details WHERE reference_person_id = ?', [reference_person_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); // Assuming user IDs are unique, so only one result is expected
      }
    });
  });
};


exports.createrefperson = (user) => {
  const { full_name, address, country, pincode, phone_no } = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO reference_person_details (full_name, address, country, pincode, phone_no) VALUES (?, ?, ?, ?, ?)', [full_name, address, country, pincode, phone_no], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updaterefperson = (reference_person_id, user) => {
  const { full_name, address, country, pincode, phone_no } = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE reference_person_details SET full_name = ?, address = ?, country = ?, pincode = ?, phone_no = ? WHERE reference_person_id = ?', [full_name, address, country, pincode, phone_no, reference_person_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

exports.deleterefperson = (reference_person_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM reference_person_details WHERE reference_person_id = ?', [reference_person_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


