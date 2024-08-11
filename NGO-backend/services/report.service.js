const express = require('express');
const db = require("../configurations/appConfigs").connection;

exports.getreports = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM report', (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getreportsById = (report_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM report WHERE report_id = ?', [report_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]); // Assuming user IDs are unique, so only one result is expected
      }
    });
  });
};

exports.createreports = (user) => {
  const { investment_form_id, investment_date, maturity_date, days, principal_amount, premium_amount, premium_amortization_amount, discount, discount_amortization_annual, other_charges, accrued_interest, jv_reference_accrued_int_nullification, investment_type, financial_instution, instrument_reference_no, purpose, classes, active_status, category, net_asset_value, interest_from_date, interest_due_date, rate_of_interest, interest_code, interest, cummulative_interest, periodicity_interest, fund_source, fund_source_reference, portion_investment_amt, preclosure, attachment, interest_credited, renewals_credit_bank, credited_invest_date } = user;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO report (investment_form_id, investment_date, maturity_date, days, principal_amount, premium_amount, premium_amortization_amount, discount, discount_amortization_annual, other_charges, accrued_interest, jv_reference_accrued_int_nullification, investment_type, financial_instution, instrument_reference_no, purpose, classes, active_status, category, net_asset_value, interest_from_date, interest_due_date, rate_of_interest, interest_code, interest, cummulative_interest, periodicity_interest, fund_source, fund_source_reference, portion_investment_amt, preclosure, attachment, interest_credited, renewals_credit_bank, credited_invest_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [investment_form_id, investment_date, maturity_date, days, principal_amount, premium_amount, premium_amortization_amount, discount, discount_amortization_annual, other_charges, accrued_interest, jv_reference_accrued_int_nullification, investment_type, financial_instution, instrument_reference_no, purpose, classes, active_status, category, net_asset_value, interest_from_date, interest_due_date, rate_of_interest, interest_code, interest, cummulative_interest, periodicity_interest, fund_source, fund_source_reference, portion_investment_amt, preclosure, attachment, interest_credited, renewals_credit_bank, credited_invest_date], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

exports.updatereports = (report_id, user) => {
  const { investment_form_id, investment_date, maturity_date, days, principal_amount, premium_amount, premium_amortization_amount, discount, discount_amortization_annual, other_charges, accrued_interest, jv_reference_accrued_int_nullification, investment_type, financial_instution, instrument_reference_no, purpose, classes, active_status, category, net_asset_value, interest_from_date, interest_due_date, rate_of_interest, interest_code, interest, cummulative_interest, periodicity_interest, fund_source, fund_source_reference, portion_investment_amt, preclosure, attachment, interest_credited, renewals_credit_bank, credited_invest_date } = user;
  return new Promise((resolve, reject) => {
    db.query('UPDATE report SET investment_form_id = ?, investment_date = ?, maturity_date = ?, days = ?, principal_amount = ?, premium_amount = ?, premium_amortization_amount = ?, discount = ?, discount_amortization_annual = ?, other_charges = ?, accrued_interest = ?, jv_reference_accrued_int_nullification = ?, investment_type = ?, financial_instution = ?, instrument_reference_no = ?, purpose = ?, classes = ?, active_status = ?, category = ?, net_asset_value = ?, interest_from_date = ?, interest_due_date = ?, rate_of_interest = ?, interest_code = ?, interest = ?, cummulative_interest = ?, periodicity_interest = ?, fund_source = ?, fund_source_reference = ?, portion_investment_amt = ?, preclosure = ?, attachment = ?, interest_credited = ?, renewals_credit_bank = ?, credited_invest_date = ? WHERE report_id = ?', [investment_form_id, investment_date, maturity_date, days, principal_amount, premium_amount, premium_amortization_amount, discount, discount_amortization_annual, other_charges, accrued_interest, jv_reference_accrued_int_nullification, investment_type, financial_instution, instrument_reference_no, purpose, classes, active_status, category, net_asset_value, interest_from_date, interest_due_date, rate_of_interest, interest_code, interest, cummulative_interest, periodicity_interest, fund_source, fund_source_reference, portion_investment_amt, preclosure, attachment, interest_credited, renewals_credit_bank, credited_invest_date, report_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

exports.deletereports = (report_id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM report WHERE report_id = ?', [report_id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};


