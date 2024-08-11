const { validationResult } = require("express-validator");
const projectproposalService = require("../services/projectproposal.service");

exports.getAllprojprop = async (req, res) => {
  try {
    
    const allproject= await projectproposalService.getAllprojprop();
    res.json(allproject);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getprojpropById = async (req, res) => {
  const projprop = req.params.project_id;

  try {
    const user = await projectproposalService.getprojpropById(projprop);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'Project Proposal not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createprojprop = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const projprop = req.body;

  try {
    const userId = await projectproposalService.createprojprop(projprop);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateprojprop = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const projprop = req.params.project_id;
  const updatedprojprop = req.body;

  try {
    const success = await projectproposalService.updateprojprop(projprop, updatedprojprop);

    if (success) {
      res.json({ message: 'Project Proposal updated successfully' });
    } else {
      res.status(404).json({ error: 'Project Proposal not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteprojprop = async (req, res) => {
  const projprop = req.params.project_id;

  try {
    const success = await projectproposalService.deleteprojprop(projprop);

    if (success) {
      res.json({ message: 'Project Proposal deleted successfully' });
    } else {
      res.status(404).json({ error: 'Project Proposal not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

