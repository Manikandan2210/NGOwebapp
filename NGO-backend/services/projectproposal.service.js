const express = require('express');
const db = require("../configurations/appConfigs").connection;

exports.getAllprojprop = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM project_proposal', (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getprojpropById = (project_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM project_proposal WHERE project_id = ?', [project_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); 
      }
    });
  });
};

exports.createprojprop = (user) => {
  const { researcher_id, project_name, project_description, project_budget, project_documentation, project_proposal_date, is_approved } = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO project_proposal (researcher_id, project_name, project_description, project_budget, project_documentation, project_proposal_date, is_approved) VALUES (?, ?, ?, ?, ?, ?, ?)', [researcher_id, project_name, project_description, project_budget, project_documentation, project_proposal_date, is_approved], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updateprojprop = (project_id, user) => {
  const { researcher_id, project_name, project_description, project_budget, project_documentation, project_proposal_date, is_approved } = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE project_proposal SET researcher_id = ?, project_name = ?, project_description = ?, project_budget = ?, project_documentation = ?, project_proposal_date = ?, is_approved = ? WHERE project_id = ?', [researcher_id, project_name, project_description, project_budget, project_documentation, project_proposal_date, is_approved, project_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};
exports.deleteprojprop = (project_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM project_proposal WHERE project_id = ?', [project_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


