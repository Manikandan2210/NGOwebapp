const { validationResult } = require("express-validator");
const amountsanctionedService = require("../services/amountsanctioned.service");

exports.getAllamountsanctioned = async (req, res) => {
  try {
    
    const amountsanctioned= await amountsanctionedService.getAllamountsanctioned();
    res.json(amountsanctioned);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getamountsanctionedById = async (req, res) => {
  const amountsanctioned = req.params.amount_sanctioned_id;

  try {
    const user = await amountsanctionedService.getamountsanctionedById(amountsanctioned);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Amount Sanctioned Record not Found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createamountsanctioned = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const amountsanctioned = req.body;

  try {
    const userId = await amountsanctionedService.createamountsanctioned(amountsanctioned);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateamountsanctioned = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const amountsanctioned = req.params.amount_sanctioned_id;
  const updateamountsanctioned = req.body;

  try {
    const success = await amountsanctionedService.updateamountsanctioned(amountsanctioned, updateamountsanctioned);

    if (success) {
      res.json({ message: 'Amount Sanctioned Record Updated Successfully' });
    } else {
      res.status(404).json({ error: 'Requested Amount Sanctioned Record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteamountsanctioned = async (req, res) => {
  const amountsanctioned = req.params.amount_sanctioned_id;

  try {
    const success = await amountsanctionedService.deleteamountsanctioned(amountsanctioned);

    if (success) {
      res.json({ message: 'Amount Sanctioned Record deleted successfully' });
    } else {
      res.status(404).json({ error: 'Requested Amount Sanctioned Record not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
