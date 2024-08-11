const { validationResult } = require("express-validator");
const noofpropService = require("../services/no_of_proposal.service");

exports.getAllnoofprop = async (req, res) => {
  try {
    
    const total = await noofpropService.getAllnoofprop();
    res.json(total);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getnoofpropById = async (req, res) => {
  const noofprop = req.params.proposal_id;

  try {
    const user = await noofpropService.getnoofpropById(noofprop);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Proposal not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createnoofprop = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const noofprop = req.body;

  try {
    const userId = await noofpropService.createnoofprop(noofprop);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updatenoofprop = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const noofprop = req.params.proposal_id;
  const updatednoofprop = req.body;

  try {
    const success = await noofpropService.updatenoofprop(noofprop, updatednoofprop);

    if (success) {
      res.json({ message: 'Proposal updated successfully' });
    } else {
      res.status(404).json({ error: 'Proposal not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deletenoofprop = async (req, res) => {
  const noofprop = req.params.proposal_id;

  try {
    const success = await noofpropService.deletenoofprop(noofprop);

    if (success) {
      res.json({ message: 'Proposal deleted successfully' });
    } else {
      res.status(404).json({ error: 'Proposal not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
