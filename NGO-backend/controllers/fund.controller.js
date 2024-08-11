const { validationResult } = require("express-validator");
const fundService = require("../services/fund.service");


exports.getfund = async (req, res) => {
  try {
    
    const allfunds = await fundService.getfund();
    res.json(allfunds);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getfundById = async (req, res) => {
  const fund = req.params.fund_id;

  try {
    const user = await fundService.getfundById(fund);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Fund is not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createfund = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const fund = req.body;

  try {
    const userId = await fundService.createfund(fund);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updatefund = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const fund = req.params.fund_id;
  const updatedfund = req.body;

  try {
    const success = await fundService.updatefund(fund, updatedfund);

    if (success) {
      res.json({ message: 'Fund has been updated successfully' });
    } else {
      res.status(404).json({ error: 'Fund not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deletefund = async (req, res) => {
  const fund = req.params.fund_id;

  try {
    const success = await fundService.deletefund(fund);

    if (success) {
      res.json({ message: 'Fund has been deleted successfully' });
    } else {
      res.status(404).json({ error: 'Fund not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
