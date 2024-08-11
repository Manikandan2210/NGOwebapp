const { validationResult } = require("express-validator");
const investmentService = require("../services/investment.service");

exports.getinvestments = async (req, res) => {
  try {
    
    const allinvestments = await investmentService.getinvestments();
    res.json(allinvestments);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getinvestmentsById = async (req, res) => {
  const investments = req.params.investment_id;

  try {
    const user = await investmentService.getinvestmentsById(investments);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Investment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createinvestments = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const investments = req.body;

  try {
    const userId = await investmentService.createinvestments(investments);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateinvestments = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const investments = req.params.investment_id;
  const updatedinvestments = req.body;

  try {
    const success = await investmentService.updateinvestments(investments, updatedinvestments);

    if (success) {
      res.json({ message: 'investment updated successfully' });
    } else {
      res.status(404).json({ error: 'Investment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteinvestments = async (req, res) => {
  const investments = req.params.investment_id;

  try {
    const success = await investmentService.deleteinvestments(investments);

    if (success) {
      res.json({ message: 'Investment deleted successfully' });
    } else {
      res.status(404).json({ error: 'Investment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
