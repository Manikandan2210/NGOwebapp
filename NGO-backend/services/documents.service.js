const express = require('express');
const db = require("../configurations/appConfigs").connection;
 
exports.getAllDocuments = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM documents', (error, results, fields) => {
      if (error) {
        reject(error);
      } else { 
        resolve(results);
      }
    });
  });
};

exports.getDocumentById = (doc_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM documents WHERE doc_id = ?', [doc_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); 
      }
    });
  });
};

exports.createDocument = (user) => {
  const { donation_id,corpus_doc,specific_doc,pan,aadhaar_no,institution_reg_donor,passport_no } = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO documents (donation_id, corpus_doc, specific_doc, pan, aadhaar_no, institution_reg_donor, passport_no) VALUES (?,?,?,?,?,?,?)', [donation_id, corpus_doc, specific_doc, pan, aadhaar_no, institution_reg_donor, passport_no], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updateDocument = (doc_id, user) => {
  const { donation_id,corpus_doc,specific_doc,pan,aadhaar_no,institution_reg_donor,passport_no } = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE documents SET donation_id = ?,corpus_doc = ?,specific_doc = ?,pan = ?,aadhaar_no = ?,institution_reg_donor = ?,passport_no = ? WHERE doc_id = ?', [donation_id, corpus_doc, specific_doc, pan, aadhaar_no, institution_reg_donor, passport_no,doc_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

exports.deleteDocument = (doc_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM documents WHERE doc_id = ?', [doc_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


