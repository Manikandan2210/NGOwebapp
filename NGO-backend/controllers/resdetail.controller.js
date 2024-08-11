const { validationResult } = require("express-validator");
const resdetailService = require("../services/resdetail.service");

exports.getresearcherdetails = async (req, res) => {
  try {
    
    const details = await resdetailService.getresearcherdetails();
    res.json(details);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getresearcherdetailsById = async (req, res) => {
  const researcherdetails = req.params.researcher_id;

  try {
    const user = await resdetailService.getresearcherdetailsById(researcherdetails);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Researcher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createresearcherdetails = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const researcherdetails = req.body;

  try {
    const userId = await resdetailService.createresearcherdetails(researcherdetails);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateresearcherdetails = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const researcherdetails = req.params.researcher_id;
  const updatedresearcherdetails = req.body;

  try {
    const success = await resdetailService.updateresearcherdetails(researcherdetails, updatedresearcherdetails);

    if (success) {
      res.json({ message: 'Researcher updated successfully' });
    } else {
      res.status(404).json({ error: 'Researcher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteresearcherdetails = async (req, res) => {
  const researcherdetails = req.params.researcher_id;

  try {
    const success = await resdetailService.deleteresearcherdetails(researcherdetails);

    if (success) {
      res.json({ message: 'Researcher deleted successfully' });
    } else {
      res.status(404).json({ error: 'Researcher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

