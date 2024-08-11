const { validationResult } = require("express-validator");
const bankService = require("../services/bank.service");

exports.getAllBankinfo = async (req, res) => {
  try {
    
    const allBankinfo = await bankService.getAllBankinfo();
    res.json(allBankinfo);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getBankinfoById = async (req, res) => {
  const bankinfoId = req.params.bankid;

  try {
    const user = await bankService.getBankinfoById(bankinfoId);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Bankinformation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createBankinfo = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const bankinfo = req.body;

  try {
    const userId = await bankService.createBankinfo(bankinfo);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateBankinfo = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const updateBankinfo = req.params.bankid;
  const updatedUser = req.body;

  try {
    const success = await bankService.updateBankinfo(updateBankinfo, updatedUser);

    if (success) {
      res.json({ message: 'Bankinformation updated successfully' });
    } else {
      res.status(404).json({ error: 'Bankinformation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteBankinfo = async (req, res) => {
  const deleteBankinfo = req.params.bankid;

  try {
    const success = await bankService.deleteBankinfo(deleteBankinfo);

    if (success) {
      res.json({ message: 'Bankinformation deleted successfully' });
    } else {
      res.status(404).json({ error: 'Bankinformation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
