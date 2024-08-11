const express = require('express');
const db = require("../configurations/appConfigs").connection;

exports.getAllnoofprop = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM no_of_proposal', (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getnoofpropById = (proposal_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM no_of_proposal WHERE proposal_id = ?', [proposal_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); // Assuming user IDs are unique, so only one result is expected
      }
    });
  });
};

exports.createnoofprop = (user) => {
  const { project_id, proposal_name } = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO no_of_proposal (project_id, proposal_name) VALUES (?, ?)', [project_id, proposal_name], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updatenoofprop = (proposal_id, user) => {
  const { project_id, proposal_name } = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE no_of_proposal SET proposal_id = ?, proposal_name = ? WHERE proposal_id = ?', [project_id, proposal_name, proposal_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

exports.deletenoofprop = (proposal_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM no_of_proposal WHERE proposal_id = ?', [proposal_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


