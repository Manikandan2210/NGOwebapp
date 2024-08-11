const express = require('express');
const db = require("../configurations/appConfigs").connection;

exports.getAllDonordetails = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM donor_details', (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getDonordetailsById = (donordetail_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM donor_details WHERE donordetail_id = ?', [donordetail_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); 
      }
    });
  });
};

exports.createDonordetails = (user) => {
  const { donation_id,salutation,donor_name,address,state,country,pincode,email,whatspp_no,telephone_no,dob } = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO donor_details (donation_id,salutation,donor_name,address,state,country,pincode,email,whatspp_no,telephone_no,dob) VALUES (?,?,?,?,?,?,?,?,?,?,?)', [donation_id,salutation,donor_name,address,state,country,pincode,email,whatspp_no,telephone_no,dob], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updateDonordetails = (donordetail_id, user) => {
  const { donation_id,salutation,donor_name,address,state,country,pincode,email,whatspp_no,telephone_no,dob } = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE donor_details SET donation_id = ?,salutation = ?,donor_name = ?,address = ?,state = ?,country = ?,pincode = ?,email = ?,whatspp_no = ?,telephone_no = ?,dob = ? WHERE donordetail_id = ?', [donation_id,salutation,donor_name,address,state,country,pincode,email,whatspp_no,telephone_no,dob, donordetail_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

exports.deleteDonordetails = (donordetail_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM donor_details WHERE donordetail_id = ?', [donordetail_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


