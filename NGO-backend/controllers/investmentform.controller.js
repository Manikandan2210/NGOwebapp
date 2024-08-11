const { validationResult } = require("express-validator");
const investmentformService = require("../services/investmentform.service");


exports.getinvestmentform = async (req, res) => {
  try {
    
    const allinvforms = await investmentformService.getinvestmentform();
    res.json(allinvforms);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getinvestmentformById = async (req, res) => {
  const investmentform = req.params.investment_form_id;

  try {
    const user = await investmentformService.getinvestmentformById(investmentform);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'investment form not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createinvestmentform = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const investmentform = req.body;

  try {
    const userId = await investmentformService.createinvestmentform(investmentform);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateinvestmentform = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const investmentform = req.params.investment_form_id;
  const updatedinvestmentform = req.body;

  try {
    const success = await investmentformService.updateinvestmentform(investmentform, updatedinvestmentform);

    if (success) {
      res.json({ message: 'The Investment form has been updated successfully' });
    } else {
      res.status(404).json({ error: 'Investment form not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteinvestmentform = async (req, res) => {
  const investmentform = req.params.investment_form_id;

  try {
    const success = await investmentformService.deleteinvestmentform(investmentform);

    if (success) {
      res.json({ message: 'Investment form deleted successfully' });
    } else {
      res.status(404).json({ error: 'Investment form not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
