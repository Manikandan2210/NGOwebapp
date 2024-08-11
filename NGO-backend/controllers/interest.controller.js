const { validationResult } = require("express-validator");
const interestService = require("../services/interest.service");

exports.getinterest = async (req, res) => {
  try {
    
    const allinterest = await interestService.getinterest();
    res.json(allinterest);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getinterestById = async (req, res) => {
  const interest = req.params.interest_id;

  try {
    const user = await interestService.getinterestById(interest);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Interest recipt not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createinterest = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const interest = req.body;

  try {
    const userId = await interestService.createinterest(interest);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateinterest = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const interest = req.params.interest_id;
  const updatedinterest = req.body;

  try {
    const success = await interestService.updateinterest(interest, updatedinterest);

    if (success) {
      res.json({ message: 'Interest recipt has been updated successfully' });
    } else {
      res.status(404).json({ error: 'Interest recipt not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteinterest = async (req, res) => {
  const interest = req.params.interest_id;

  try {
    const success = await interestService.deleteinterest(interest);

    if (success) {
      res.json({ message: 'Interest recipt deleted successfully' });
    } else {
      res.status(404).json({ error: 'Interest recipt not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
