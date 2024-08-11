const express = require('express');
const db = require("../configurations/appConfigs").connection;

exports.getAllexpensereport = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM expense_report', (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getexpensereportById = (expense_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM expense_report WHERE expense_id = ?', [expense_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); 
      }
    });
  });
};

exports.createexpensereport = (user) => {
  const { amount_sanctioned_id, researcher_id, expense_date, type_of_expense, installment_no, expenditure_amount, grant_balance, interest_earned_on_grant_balance } = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO expense_report (amount_sanctioned_id, researcher_id, expense_date, type_of_expense, installment_no, expenditure_amount, grant_balance, interest_earned_on_grant_balance) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [amount_sanctioned_id, researcher_id, expense_date, type_of_expense, installment_no, expenditure_amount, grant_balance, interest_earned_on_grant_balance], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updateexpensereport = (expense_id, user) => {
  const { amount_sanctioned_id, researcher_id, expense_date, type_of_expense, installment_no, expenditure_amount, grant_balance, interest_earned_on_grant_balance } = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE expense_report SET amount_sanctioned_id = ?, researcher_id = ?, expense_date = ?, type_of_expense = ?, installment_no = ?, expenditure_amount = ?, grant_balance = ?, interest_earned_on_grant_balance = ? WHERE expense_id = ?', [amount_sanctioned_id, researcher_id, expense_date, type_of_expense, installment_no, expenditure_amount, grant_balance, interest_earned_on_grant_balance, expense_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

exports.deleteexpensereport = (expense_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM expense_report WHERE expense_id = ?', [expense_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


