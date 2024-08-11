const { validationResult } = require("express-validator");
const referenceService = require("../services/reference.service");

exports. getrefno = async (req, res) => {
  try {
    
    const allreference = await referenceService.getrefno();
    res.json(allreference);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getrefnoById = async (req, res) => {
  const refno = req.params.reference_id;

  try {
    const user = await referenceService.getrefnoById(refno);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'The given reference number not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createrefno = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const refno = req.body;

  try {
    const userId = await referenceService.createrefno(refno);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updaterefno = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const refno = req.params.reference_id;
  const updatedrefno = req.body;

  try {
    const success = await referenceService.updaterefno(refno, updatedrefno);

    if (success) {
      res.json({ message: 'the changes to the reference number updated successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleterefno = async (req, res) => {
  const refno = req.params.reference_id;

  try {
    const success = await referenceService.deleterefno(refno);

    if (success) {
      res.json({ message: 'the respective reference number has been deleted successfully' });
    } else {
      res.status(404).json({ error: 'The given reference number not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
