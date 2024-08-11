const express = require('express');
const db = require("../configurations/appConfigs").connection;

exports.getinvestmentform = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM investment_form', (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getinvestmentformById = (investment_form_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM investment_form WHERE investment_form_id = ?', [investment_form_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); // Assuming user IDs are unique, so only one result is expected
      }
    });
  });
};

exports.createinvestmentform = (user) => {
  const { investment_id, donordetail_id, donation_detail_id, investment_committee_approval, bank_name, instrument_type, investment_date, maturity_date, investment_amount, rate_of_interest, cummulative_interest, ex_interest, face_value, premium_discount, other_charges, periodicity_interest_payout, purpose, source_fund, new_investment, donation_reference_no, donor_name, investment_source, purpose_of_donation, amount, sector, fund_source_reference, fund_transfer, interest_credit_account, maturity_credit_account, approver, investment_reference_no, custodian_of_instrument, accounting, custodian_sign } = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO investment_form (investment_id, donordetail_id, donation_detail_id, investment_committee_approval, bank_name, instrument_type, investment_date, maturity_date, investment_amount, rate_of_interest, cummulative_interest, ex_interest, face_value, premium_discount, other_charges, periodicity_interest_payout, purpose, source_fund, new_investment, donation_reference_no, donor_name, investment_source, purpose_of_donation, amount, sector, fund_source_reference, fund_transfer, interest_credit_account, maturity_credit_account, approver, investment_reference_no, custodian_of_instrument, accounting, custodian_sign) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [investment_id, donordetail_id, donation_detail_id, investment_committee_approval, bank_name, instrument_type, investment_date, maturity_date, investment_amount, rate_of_interest, cummulative_interest, ex_interest, face_value, premium_discount, other_charges, periodicity_interest_payout, purpose, source_fund, new_investment, donation_reference_no, donor_name, investment_source, purpose_of_donation, amount, sector, fund_source_reference, fund_transfer, interest_credit_account, maturity_credit_account, approver, investment_reference_no, custodian_of_instrument, accounting, custodian_sign], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updateinvestmentform = (investment_form_id, user) => {
  const { investment_id, donordetail_id, donation_detail_id, investment_committee_approval, bank_name, instrument_type, investment_date, maturity_date, investment_amount, rate_of_interest, cummulative_interest, ex_interest, face_value, premium_discount, other_charges, periodicity_interest_payout, purpose, source_fund, new_investment, donation_reference_no, donor_name, investment_source, purpose_of_donation, amount, sector, fund_source_reference, fund_transfer, interest_credit_account, maturity_credit_account, approver, investment_reference_no, custodian_of_instrument, accounting, custodian_sign } = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE investment_form SET investment_id = ?, donordetail_id = ?, donation_detail_id = ?, investment_committee_approval = ?, bank_name = ?, instrument_type = ?, investment_date = ?, maturity_date = ?, investment_amount = ?, rate_of_interest = ?, cummulative_interest = ?, ex_interest = ?, face_value = ?, premium_discount = ?, other_charges = ?, periodicity_interest_payout = ?, purpose = ?, source_fund = ?, new_investment = ?, donation_reference_no = ?, donor_name = ?, investment_source = ?, purpose_of_donation = ?, amount = ?, sector = ?, fund_source_reference = ?, fund_transfer = ?, interest_credit_account = ?, maturity_credit_account = ?, approver = ?, investment_reference_no = ?, custodian_of_instrument = ?, accounting = ?, custodian_sign = ? WHERE investment_form_id = ?', [investment_id, donordetail_id, donation_detail_id, investment_committee_approval, bank_name, instrument_type, investment_date, maturity_date, investment_amount, rate_of_interest, cummulative_interest, ex_interest, face_value, premium_discount, other_charges, periodicity_interest_payout, purpose, source_fund, new_investment, donation_reference_no, donor_name, investment_source, purpose_of_donation, amount, sector, fund_source_reference, fund_transfer, interest_credit_account, maturity_credit_account, approver, investment_reference_no, custodian_of_instrument, accounting, custodian_sign, investment_form_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

exports.deleteinvestmentform = (investment_form_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM investment_form WHERE investment_form_id = ?', [investment_form_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


