const express = require('express');
const db = require("../configurations/appConfigs").connection;
 
exports.getDonationdetails = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM donation_details', (error, results, fields) => {
      if (error) {
        reject(error);
      } else { 
        resolve(results);
      }
    });
  });
};

exports.getDonationdetailId = (donation_detail_id ) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM donation_details WHERE donation_detail_id = ?', [donation_detail_id ], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); 
      }
    });
  });
};

exports.createDonationdetail = (user) => {
  const { donation_id,remittance_mode,donor_types,taxexemption_category,fundsource,nature_of_donation,purpose,currency,
    amount_fc,exchange_rate,amount_rs,bankcharges} = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO donation_details (donation_id,remittance_mode,donor_types,taxexemption_category,fundsource,nature_of_donation,purpose,currency,amount_fc,exchange_rate,amount_rs,bankcharges) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [donation_id,remittance_mode,donor_types,taxexemption_category,fundsource,nature_of_donation,purpose,currency,
  amount_fc,exchange_rate,amount_rs,bankcharges], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updateDonationdetail= (donation_detail_id , user) => {
  const { donation_id,remittance_mode,donor_types,taxexemption_category,fundsource,nature_of_donation,purpose,currency,
    amount_fc,exchange_rate,amount_rs,bankcharges } = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE donation_details SET donation_id = ?,remittance_mode = ?,donor_types = ?,taxexemption_category = ?,fundsource = ?,nature_of_donation = ?,purpose = ?,currency = ?,amount_fc = ?,exchange_rate = ?,amount_rs = ?,bankcharges = ? WHERE donation_detail_id = ?', [donation_id,remittance_mode,donor_types,taxexemption_category,fundsource,nature_of_donation,purpose,currency,
      amount_fc,exchange_rate,amount_rs,bankcharges,donation_detail_id ], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

exports.deleteDonationdetail = (donation_detail_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM donation_details WHERE donation_detail_id = ?', [donation_detail_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


