const { validationResult } = require("express-validator");
const expensereportService = require("../services/expensereport.service");

exports.getAllexpensereport = async (req, res) => {
  try {
    
    const expensereport = await expensereportService.getAllexpensereport();
    res.json(expensereport);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getexpensereportById = async (req, res) => {
  const expensereport = req.params.expense_id;

  try {
    const user = await expensereportService.getexpensereportById(expensereport);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Requested Expense Report not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createexpensereport = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const expensereport = req.body;

  try {
    const userId = await expensereportService.createexpensereport(expensereport);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateexpensereport = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const expensereport = req.params.expense_id;
  const updatedexpensereport = req.body;

  try {
    const success = await expensereportService.updateexpensereport(expensereport, updatedexpensereport);

    if (success) {
      res.json({ message: 'Expense Report updated successfully' });
    } else {
      res.status(404).json({ error: 'Expense Report not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteexpensereport = async (req, res) => {
  const expensereport = req.params.expense_id;

  try {
    const success = await expensereportService.deleteexpensereport(expensereport);

    if (success) {
      res.json({ message: 'Expense Report deleted successfully' });
    } else {
      res.status(404).json({ error: 'Expense Report not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
