const express = require('express');
const db = require("../configurations/appConfigs").connection;


exports.getinterest = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM interest', (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getinterestById = (interest_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM interest WHERE interest_id = ?', [interest_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); // Assuming user IDs are unique, so only one result is expected
      }
    });
  });
};

exports.createinterest = (user) => {
  const { investment_form_id, investment_no, instrument_no, investment_amt, source,purpose, credit_date, from_date, to_date, interest_amt, cummulative_interest} = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO interest (investment_form_id, investment_no, instrument_no, investment_amt, source,purpose, credit_date, from_date, to_date, interest_amt, cummulative_interest) VALUES (?, ?, ?, ?, ?, ?, ? ,? ,?, ?, ?)', [investment_form_id, investment_no, instrument_no, investment_amt, source,purpose, credit_date, from_date, to_date, interest_amt, cummulative_interest], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updateinterest = (interest_id, user) => {
  const { investment_form_id, investment_no, instrument_no, investment_amt, source,purpose, credit_date, from_date, to_date, interest_amt, cummulative_interest} = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE interest SET investment_form_id = ?, investment_no = ?, instrument_no = ?, investment_amt = ?, source = ?, purpose = ?, credit_date = ?, from_date = ?, to_date = ?, interest_amt = ?, cummulative_interest = ? WHERE interest_id = ?', [investment_form_id, investment_no, instrument_no, investment_amt, source,purpose, credit_date, from_date, to_date, interest_amt, cummulative_interest, interest_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

exports.deleteinterest = (interest_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM interest WHERE interest_id = ?', [interest_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


