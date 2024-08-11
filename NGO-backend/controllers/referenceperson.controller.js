const { validationResult } = require("express-validator");
const referencepersonService = require("../services/referenceperson.service");


exports.getrefperson = async (req, res) => {
  try {
    
    const allrefperson = await referencepersonService.getrefperson();
    res.json(allrefperson);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getrefpersonById = async (req, res) => {
  const refperson = req.params.reference_person_id;

  try {
    const user = await referencepersonService.getrefpersonById(refperson);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createrefperson = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const refperson = req.body;

  try {
    const userId = await referencepersonService.createrefperson(refperson);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updaterefperson = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const refperson = req.params.reference_person_id;
  const updatedrefperson = req.body;

  try {
    const success = await referencepersonService.updaterefperson(refperson, updatedrefperson);

    if (success) {
      res.json({ message: 'the given details has been updated successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleterefperson = async (req, res) => {
  const refperson = req.params.reference_person_id;

  try {
    const success = await referencepersonService.deleterefperson(refperson);

    if (success) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
